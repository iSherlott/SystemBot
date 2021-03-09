const { aslan } = require("../config/config.json");

module.exports = (message) => {
  return message.author.id == aslan;
};
