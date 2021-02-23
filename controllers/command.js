const { prefix } = require("../config/config.json");

module.exports = (client, aliases, callback) => {
  if (typeof aliases === "string") {
    aliases = [aliases];
  }

  client.on("message", (message) => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    aliases.forEach((alias) => {
      const command = `${prefix}${alias}`;

      if (content.startsWith(`${command} `) || content === command) {
        callback(message, alias);
      }
    });
  });
};
