const Discord = require("discord.js");

module.exports = (
  message,
  name,
  region,
  memberCount,
  owner,
  afkTimeout,
  icon
) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Informação do Servidor ${name}`)
    .setThumbnail(icon)
    .addFields(
      { name: "Região", value: region },
      { name: "Número de Membros", value: memberCount },
      { name: "Dono", value: owner },
      { name: "Tempo maximo AFK", value: `${afkTimeout / 60} Minutos` }
    );

  message.channel.send(embed);
};
