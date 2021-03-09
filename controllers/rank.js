const Discord = require("discord.js");
const {
  price,
  nameCoin,
  channelRank,
  prefix,
} = require("../config/config.json");

module.exports = async (client) => {
  const channelId = await client.channels.fetch(channelRank);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Top rank de quem desconectou mais o Aslan!!!`)
    .setColor(`#9367F3`)
    .setFooter(
      `Atualizado em ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    );

  embed.addField(`Key`, `Value`, true);

  channelId.send({ embed });
};
