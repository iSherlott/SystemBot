const { exclusiveChannelCommand } = require("../config/config.json");

module.exports = (message) => {
  return exclusiveChannelCommand.includes(message.channel.id);
};
