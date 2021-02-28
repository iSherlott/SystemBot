const embedAction = require("../views/embed_action");

module.exports = (client, message) => {
  embedAction(
    client,
    message.channel.id,
    message,
    "kick",
    "chutou",
    "#7FFFD4",
    "🦶"
  );
};
