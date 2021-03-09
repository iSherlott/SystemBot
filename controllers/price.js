const Discord = require("discord.js");
const {
  price,
  nameCoin,
  channelPrice,
  prefix,
} = require("../config/config.json");

module.exports = async (client) => {
  const channelId = await client.channels.fetch(channelPrice);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Veja abaixo o valor do comandos! `)
    .setColor(`#cec6da`)
    .setFooter(`Utilize o prefixo ${prefix} antes de cada comando.`);

  for (let key in price)
    embed.addField(`${key}`, `${price[key]} ${nameCoin}`, true);

  channelId.messages.fetch().then((messages) => {
    if (messages.size === 0) {
      channelId.send({ embed });
    } else {
      for (const message of messages) {
        message[1].edit({ embed });
      }
    }
  });
};
