const Discord = require("discord.js");
const client = new Discord.Client();

const { token, channel_tag } = require("./config/config");

const command = require("./controllers/command");
const clearAll = require("./commands/clear_all");

const welcome = require("./controllers/welcome");

const colorClaim = require("./controllers/color-claim");
const ruleClaim = require("./controllers/rules-claim");

const del = require("./controllers/del_all_messages");

client.on("ready", () => {
  console.log("Viva Happy!");
  client.user.setActivity(`"+comandos: !help"`);

  del(client, channel_tag);

  ruleClaim(client);
  colorClaim(client);
});

client.on("guildMemberAdd", (member) => {
  welcome(client, member);
});

var setCommands = ["clearAll", "ping"];

command(client, setCommands, (message, alias) => {
  if (message.author.id == message.guild.owner) {
    switch (alias) {
      case "clearAll":
        clearAll(client, message.channel.id);
        break;
    }
  }

  switch (alias) {
    case "ping":
      message.channel.send("Poing");
      break;
  }
});

client.login(token);
