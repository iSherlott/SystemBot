const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");
const sendMenssageDM = require("../views/embed_DM_message+gif");

module.exports = async (client, message, value) => {
  let channelRoulette = client.guilds.cache.map((e) =>
    e.members.cache.get(message.author.id)
  );
  channelRoulette = channelRoulette[0].voice.channelID;

  const users = [];

  await client.guilds.cache.map((member) =>
    member.members.cache.find((user) => {
      if (user.voice.channelID == channelRoulette) {
        users.push(user.user.id);
      }
    })
  );

  const userRoulette = users[Math.floor(Math.random() * users.length)];

  const user = client.guilds.cache.map((e) =>
    e.members.cache.get(userRoulette)
  );

  if (user[0].voice.channelID) {
    user[0].voice.setChannel(null);
    sendMenssageDM(
      client,
      userRoulette,
      `O <@${message.author.id}> pagou para ver quem iria morrer nessa Roleta Russa, infelizmente quem acabou morrendo foi você!`,
      "roulette",
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
              `<@${message.author.id}>, Para executar o roleta russa é preciso que você esteja em um channel.`
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
