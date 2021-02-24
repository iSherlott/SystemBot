const Discord = require("discord.js");
const client = new Discord.Client();

const { token, rolesChannel } = require("./config/config");

const command = require("./controllers/command");
const clearAll = require("./commands/clear_all");
const embedAction = require("./views/embed_action");

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

var setCommands = ["clearAll", "kiss", "kick", "hug", "hit", "test"];

command(client, setCommands, (message, alias) => {
  if (message.author.id == message.guild.owner) {
    switch (alias) {
      case "clearall":
        clearAll(client, message.channel.id);
        break;
      case "test":
        const { mentions } = message;
        console.log(mentions.users);
        break;
    }
  }

  switch (alias) {
    case "kiss":
      embedAction(
        client,
        message.channel.id,
        message,
        "kiss",
        "beijou",
        "#B0C4DE",
        "💋"
      );
      break;
    case "kick":
      embedAction(
        client,
        message.channel.id,
        message,
        "kick",
        "chutou",
        "#7FFFD4",
        "🦶"
      );
      break;
    case "hug":
      embedAction(
        client,
        message.channel.id,
        message,
        "hug",
        "abraçou",
        "#A020F0",
        "🤗"
      );
      break;
    case "hit":
      embedAction(
        client,
        message.channel.id,
        message,
        "hit",
        "socou",
        "#DB7093",
        "🎯"
      );
      break;
  }
});

client.login(token);
