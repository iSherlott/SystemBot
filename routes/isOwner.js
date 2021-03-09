const clearAll = require("../commands/clear_all");
const addCoin = require("../commands/addCoin");
const subCoin = require("../commands/subCoin");
const test = require("../commands/test");

const hasSupport = require("./hasSupport");

module.exports = (client, alias, message) => {
  switch (alias) {
    case "clearall":
      clearAll(client, message.channel.id);
      break;
    case "addcoin":
      addCoin(message);
      break;
    case "subcoin":
      subCoin(message);
      break;
    case "test":
      test(client, message, "Owner");
      break;
    default:
      hasSupport(client, alias, message);
      break;
  }
};
