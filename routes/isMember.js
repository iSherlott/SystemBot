const aslan = require("../commands/aslan");
const kiss = require("../commands/kiss");
const kick = require("../commands/kick");
const hug = require("../commands/hug");
const hit = require("../commands/hit");
const nickname = require("../commands/nickname");
const fortune = require("../commands/fortune");
const daily = require("../commands/daily");
const help = require("../commands/help");

module.exports = (client, alias, message) => {
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
};
