const Discord = require("discord.js");
const client = new Discord.Client();

const { token, rolesChannel } = require("./config/config");

const command = require("./controllers/command");
const clearAll = require("./commands/clear_all");
const disconnect = require("./commands/disconnect");
const aslan = require("./commands/aslan");
const kiss = require("./commands/kiss");
const kick = require("./commands/kick");
const hug = require("./commands/hug");
const hit = require("./commands/hit");
const nickname = require("./commands/nickname");
const fortune = require("./commands/fortune");
const daily = require("./commands/daily");
const help = require("./commands/help");

const welcome = require("./controllers/welcome");

const colorClaim = require("./controllers/color-claim");
const ruleClaim = require("./controllers/rules-claim");

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

var setCommands = [
  "help",
  "clearall",
  "kiss",
  "kick",
  "hug",
  "hit",
  "test",
  "aslan",
  "disconnect",
  "nickname",
  "daily",
  "fortune",
];

command(client, setCommands, (message, alias) => {
  if (message.author.id == message.guild.owner) {
    switch (alias) {
      case "clearall":
        clearAll(client, message.channel.id);
        break;
      case "disconnect":
        disconnect(client, message);
        break;
    }
  }

  switch (alias) {
    case "help":
      help(client);
      break;
    case "nickname":
      nickname(client, message);
      break;
    case "aslan":
      aslan(client, message);
      break;
    case "kiss":
      kiss(client, message);
      break;
    case "kick":
      kick(client, message);
      break;
    case "hug":
      hug(client, message);
      break;
    case "hit":
      hit(client, message);
      break;
    case "fortune":
      fortune(message);
      break;
    case "daily":
      daily(message);
      break;
  }
});

client.login(token);
