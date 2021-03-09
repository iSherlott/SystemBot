const aslan = require("../commands/aslan");
const kiss = require("../commands/kiss");
const kick = require("../commands/kick");
const hug = require("../commands/hug");
const hit = require("../commands/hit");
const nickname = require("../commands/nickname");
const fortune = require("../commands/fortune");
const daily = require("../commands/daily");
const help = require("../commands/help");
const roulette = require("../commands/roulette");
const wallet = require("../commands/wallet");
const serverInfo = require("../commands/serverInfo");
const pay = require("../controllers/pay");
const freeaslan = require("../helpers/freeAslan");

const channelCommand = require("../helpers/channelCommand");
const { price } = require("../config/config.json");

module.exports = async (client, alias, message) => {
  switch (alias) {
    case "help":
      help(message);
      break;
    case "nickname":
      if (channelCommand(message) && (await pay(message, price.nickname)))
        nickname(client, message);
      break;
    case "aslan":
      if (
        freeaslan(message) ||
        (channelCommand(message) && (await pay(message, price.aslan)))
      )
        aslan(client, message, price.aslan);
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
      if (channelCommand(message)) fortune(message);
      break;
    case "daily":
      if (channelCommand(message)) daily(message);
      break;
    case "roulette":
      if (channelCommand(message) && (await pay(message, price.roulette)))
        roulette(client, message, price.roulette);
      break;
    case "wallet":
      wallet(client, message);
      break;
    case "serverinfo":
      serverInfo(message);
      break;
  }
};
