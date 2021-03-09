const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const { channelRules, id_bot } = require("../config/config.json");

const dateZero = require("../helpers/reset_timestamp");

const addReactions = (message, reactions) => {
  message.react(reactions);
};

module.exports = async (client) => {
  const channel = await client.channels.fetch(channelRules);

  const reactions = client.emojis.cache.find((emoji) => emoji.name === "flag");

  channel.messages.fetch().then((messages) => {
    if (messages.size === 0) {
      channel.send("Crie as Rules do seu Servidor Aqui!!!").then((message) => {
        addReactions(message, reactions);
      });
    } else {
      for (const message of messages) {
        addReactions(message[1], reactions);
      }
    }
  });

  const handleReaction = (reaction, user) => {
    if (user.id === id_bot) {
      return;
    }

    const { guild } = reaction.message;

    const roleName = "Member";

    const role = guild.roles.cache.find((role) => role.name === roleName);
    const member = guild.members.cache.find((member) => member.id === user.id);

    member.roles.add(role);

    const { _roles } = guild.members.cache.find(
      (member) => member.id === user.id
    );

    if (!_roles.includes(role.id)) {
      let stm = db.prepare(
        `INSERT INTO users (id, daily, fortune, coin, exp, level) VALUES (${
          user.id
        }, ${dateZero(Date.now())},  ${Date.now()}, 0, 0, 1);`
      );
      stm.run();
      stm.finalize();
    }
  };

  client.on("messageReactionAdd", (reaction, user) => {
    if (reaction.message.channel.id === channel.id) {
      handleReaction(reaction, user);
    }
  });
};
