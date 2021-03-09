const { prefix, commandChannel } = require("../config/config.json");

module.exports = (client, aliases, callback) => {
  if (typeof aliases === "string") {
    aliases = [aliases];
  }

  client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    const content = message.content.toLowerCase();

    aliases.forEach((alias) => {
      const command = `${prefix}${alias}`;

      if (content.startsWith(`${command} `) || content === command) {
        callback(client, message, alias);
      }
    });
  });
};
