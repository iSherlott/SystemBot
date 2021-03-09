const isMember = require("./isMember");

const disconnect = require("../commands/disconnect");
const register = require("../commands/register");
const test = require("../commands/test");

module.exports = (client, alias, message) => {
  switch (alias) {
    case "disconnect":
      disconnect(client, message);
      break;
    case "register":
      register(client, message);
      break;
    case "beta":
      test(client, message, "Support");
      break;
    default:
      isMember(client, alias, message);
      break;
  }
};
