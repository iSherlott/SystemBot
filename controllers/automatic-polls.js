const { suggestionsChannel } = require("../config/config.json");

module.exports = (client) => {
  const addReactions = (message) => {
    message.react("👍");

    setTimeout(() => {
      message.react("👎");
    }, 750);
  };

  client.on("message", (message) => {
    if (suggestionsChannel.includes(message.channel.id)) {
      addReactions(message);
    }
  });
};
