const firstMessage = require("./first-message");
const playColor = require("../controllers/playColor");

const { channelColor, id_bot } = require("../config/config.json");
const { nameCoin } = require("../config/config.json");

module.exports = (client, value) => {
  const channelId = channelColor;

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

  let emojiText = `Selecione a cor que deseja a ser atribuida a seu discord, isso ira lhe custar somente ${value} ${nameCoin}\n\n`;
  for (const key in emojis) {
    const emoji = getEmoji(key);
    reactions.push(emoji);

    const role = emojis[key];
    emojiText += `${emoji} = ${role}\n`;
  }

  firstMessage(client, channelId, emojiText, reactions);

  const handleReaction = async (reaction, user, add) => {
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
      if (await playColor(user.id, value, reaction.message.channel)) {
        for (let color in emojis) {
          const hasRole = guild.roles.cache.find(
            (role) => role.name === emojis[color]
          );

          const guildMember = guild.members.cache.find(
            (guildMember) => guildMember.user == user.id
          );

          if (guildMember._roles.includes(hasRole.id)) {
            member.roles.remove(hasRole);
          }
        }

        member.roles.add(role);
        reaction.message.channel
          .send(
            `A cor do <@${user.id}> Foi trocada para ${role} com sucesso!!!`
          )
          .then((message) =>
            setTimeout(() => {
              message.delete();
            }, 8000)
          );
      }
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
