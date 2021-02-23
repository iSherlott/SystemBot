const Jimp = require("jimp");

module.exports = async (client, member) => {
  const channaldefaul = member.guild.systemChannelID;
  let channel = client.channels.cache.get(channaldefaul);
  let font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
  let mask = await Jimp.read("./assets/mask.png");
  let background = await Jimp.read("./assets/welcome.png");

  const URL = `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}`;
  await Jimp.read(URL).then((avatar) => {
    avatar.resize(330, 330);
    mask.resize(330, 330);
    avatar.mask(mask);
    background.print(font, 30, 30, member.user.username);
    background.print(font, 790, 30, member.user.discriminator);
    background.composite(avatar, 28, 115).write("./assets/welcome_user.png");
  });

  channel.send(
    `Bem vindo a o lugar mais tóxico que já presenciou, sua jornada de anti-mimização começa lendo as <#807666803492651008>`,
    {
      files: ["./assets/welcome_user.png"],
    }
  );
};
