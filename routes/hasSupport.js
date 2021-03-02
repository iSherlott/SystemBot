const isMember = require("./isMember");

module.exports = (client, alias, message) => {
  switch (alias) {
    case "disconnect":
      disconnect(client, message);
      break;
    default:
      isMember(client, alias, message);
      break;
  }
};
