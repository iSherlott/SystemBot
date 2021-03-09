const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const dateZero = require("../helpers/reset_timestamp");

module.exports = async (client, message) => {
  let userId = message.mentions.users.map((e) => e.id);
  await db.all(
    `SELECT id, fortune, coin FROM users WHERE id = ${userId}`,
    (error, rows) => {
      if (rows.length == 0) {
        if (userId.length > 1)
          return channel.send(
            `<@${message.author.id}> ,Você só pode dar ${folder} a uma pessoa por vez!`
          );

        if (userId <= 0)
          return channel.send(
            `<@${message.author.id}> ,Você precisa indicar quem você deseja dar ${folder}`
          );

        let stm = db.prepare(
          `INSERT INTO users (id, daily, fortune, coin, exp, level) VALUES (${userId}, ${dateZero(
            Date.now()
          )},  ${Date.now()}, 0, 0, 1);`
        );
        stm.run();
        stm.finalize();

        message.channel.send(`Usuário <@${userId}> registado com sucesso!`);
      } else {
        message.channel.send(`Usuário <@${userId}> já cadastrado!`);
      }
    }
  );
};
