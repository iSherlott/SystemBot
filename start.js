const Discord = require("discord.js");
const client = new Discord.Client();

const { token, rolesChannel } = require("./config/config");
const setCommands = require("./commands/setCommands");

const command = require("./controllers/command");

const isOwner = require("./routes/isOwner");
const hasSupport = require("./routes/hasSupport");
const isMember = require("./routes/isMember");

const welcome = require("./controllers/welcome");

const colorClaim = require("./controllers/color-claim");
const ruleClaim = require("./controllers/rules-claim");

const hasRole = require("./helpers/hasRole");

const del = require("./controllers/del_all_messages");

client.on("ready", () => {
  console.log("Viva Happy!");
  client.user.setActivity(`"+comandos: !help"`);

  del(client, rolesChannel);

  ruleClaim(client);
  colorClaim(client);
});

client.on("guildMemberAdd", (member) => {
  welcome(client, member);
});

command(client, setCommands, (client, message, alias) => {
  if (message.author.id == message.guild.owner) isOwner(client, alias, message);
  else if (hasRole(message, "Support")) hasSupport(client, alias, message);
  else isMember(client, message, alias);
});

client.login(token);
