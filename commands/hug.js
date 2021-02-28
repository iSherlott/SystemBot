const embedAction = require("../views/embed_action");

module.exports = (client, message) => {
  embedAction(
    client,
    message.channel.id,
    message,
    "hug",
    "abraçou",
    "#A020F0",
    "🤗"
  );
};
