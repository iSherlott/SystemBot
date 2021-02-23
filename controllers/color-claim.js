const firstMessage = require("./first-message");
const { colorChannel, id_bot } = require("../config/config.json");

module.exports = (client) => {
  const channelId = colorChannel;

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName);

  const emojis = {
    yellow: "Yellow",
    blue: "Blue",
    white: "White",
    orange: "Orange",
    brown: "Brown",
    violet: "Violet",
    green: "Green",
    red: "Red",
  };

  const reactions = [];

  let emojiText =
    "Selecione a cor que deseja a ser atribuida a seu discord.\n\n";
  for (const key in emojis) {
    const emoji = getEmoji(key);
    reactions.push(emoji);

    const role = emojis[key];
    emojiText += `${emoji} = ${role}\n`;
  }

  firstMessage(client, channelId, emojiText, reactions);

  const handleReaction = (reaction, user, add) => {
    if (user.id === id_bot) {
      return;
    }

    const emoji = reaction._emoji.name;

    const { guild } = reaction.message;

    const roleName = emojis[emoji];
    if (!roleName) {
      return;
    }

    const role = guild.roles.cache.find((role) => role.name === roleName);
    const member = guild.members.cache.find((member) => member.id === user.id);

    if (add) {
      member.roles.add(role);
    } else {
      member.roles.remove(role);
    }
  };

  client.on("messageReactionAdd", (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true);
    }
  });

  client.on("messageReactionRemove", (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false);
    }
  });
};
