const hasRole = require("../helpers/hasRole");
const { jsonCommandsOwner } = require("../commands/setCommands");
const { jsonCommandsSupport } = require("../commands/setCommands");
const { jsonCommandsMember } = require("../commands/setCommands");

const embedHelp = require("../views/embed_help");

module.exports = (message) => {
  if (message.author.id == message.guild.owner)
    embedHelp(message, jsonCommandsOwner);
  else if (hasRole(message, "Support")) embedHelp(message, jsonCommandsSupport);
  else if (hasRole(message, "Member")) embedHelp(message, jsonCommandsMember);
};
