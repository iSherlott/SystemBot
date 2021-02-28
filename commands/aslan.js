const { aslan } = require("../config/config.json");
const sendMenssageDM = require("../views/embed_DM_message+gif");

module.exports = (client, message) => {
  const user1 = client.guilds.cache.map((e) => e.members.cache.get(aslan));

  if (user1[0].voice.channelID) {
    user1[0].voice.setChannel(null);
    sendMenssageDM(
      client,
      aslan,
      `
      Você foi desconectado pelo <@${message.author.id}>\n
      Calma amigo, regras são regras!
      `,
      "disconnect",
      "#B8B8F3"
    );
  }
};
