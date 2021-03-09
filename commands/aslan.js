const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");
const sendMenssageDM = require("../views/embed_DM_message+gif");

const { aslan } = require("../config/config.json");

module.exports = async (client, message, value) => {
  const user = client.guilds.cache.map((e) => e.members.cache.get(aslan));

  if (user[0].voice.channelID) {
    user[0].voice.setChannel(null);
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
  } else {
    await db.all(
      `SELECT id, coin FROM users WHERE id = ${message.author.id}`,
      (error, rows) => {
        if (rows[0]) {
          let stm = db.prepare(
            `UPDATE USERS SET coin = coin + ${value} WHERE id = ${message.author.id}`
          );
          stm.run();
          stm.finalize();
          message.channel
            .send(
              `Calma <@${message.author.id}>, o aslan tem que estar em um channel para podermos kikar ele!`
            )
            .then((message) =>
              setTimeout(() => {
                message.delete();
              }, 8000)
            );
        }
      }
    );
  }
};
