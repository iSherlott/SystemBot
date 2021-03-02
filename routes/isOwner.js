const clearAll = require("../commands/clear_all");
const disconnect = require("../commands/disconnect");

const hasSupport = require("./hasSupport");

module.exports = (client, alias, message) => {
  switch (alias) {
    case "clearall":
      clearAll(client, message.channel.id);
      break;
    case "test":
      message.channel.send(`Test Okey in Owner`);
      break;
    default:
      hasSupport(client, alias, message);
      break;
  }
};
