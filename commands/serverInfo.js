const embedInfo = require("../views/embed_info");

module.exports = (message) => {
  const { guild } = message;

  const { name, region, memberCount, owner, afkTimeout } = guild;
  const icon = guild.iconURL();

  embedInfo(message, name, region, memberCount, owner, afkTimeout, icon);
};
