const embedAction = require("../views/embed_action");

module.exports = (client, message) => {
  embedAction(
    client,
    message.channel.id,
    message,
    "kiss",
    "beijou",
    "#B0C4DE",
    "💋"
  );
};
