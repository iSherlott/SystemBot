const Discord = require("discord.js");
const client = new Discord.Client();

const { token, rolesChannel } = require("./config/config");
const { setCommands } = require("./commands/setCommands");
const { price } = require("./config/config.json");

const command = require("./controllers/command");

const isOwner = require("./routes/isOwner");
const hasSupport = require("./routes/hasSupport");
const isMember = require("./routes/isMember");

const poll = require("./controllers/automatic-polls");

const welcome = require("./controllers/welcome");
const level = require("./controllers/level");
const priceShow = require("./controllers/price");
const rank = require("./controllers/rank");

const colorClaim = require("./controllers/color-claim");
const ruleClaim = require("./controllers/rules-claim");

const hasRole = require("./helpers/hasRole");

const del = require("./controllers/del_all_messages");

client.on("ready", () => {
  console.log("Viva Happy!");
  client.user.setActivity(`comandos: !help`);

  rank(client);

  poll(client);
  level(client);
  priceShow(client);

  del(client, rolesChannel);

  ruleClaim(client);
  colorClaim(client, price.color);
});

client.on("guildMemberAdd", (member) => {
  welcome(client, member);
});

command(client, setCommands, (client, message, alias) => {
  if (message.author.id == message.guild.owner) isOwner(client, alias, message);
  else if (hasRole(message, "Support")) hasSupport(client, alias, message);
  else if (hasRole(message, "Member")) isMember(client, alias, message);
});

client.login(token);
