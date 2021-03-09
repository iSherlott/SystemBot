const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const { nameCoin } = require("../config/config.json");

const convertHours = require("../helpers/hours_timestamp_convert");

module.exports = async (message) => {
  let coin = Math.floor(Math.random() * 500);

  await db.all(
    `SELECT id, fortune, coin FROM users WHERE id = ${message.author.id}`,
    (error, rows) => {
      if (rows.length != 1)
        return message.channel.send(`Usuario não localizado!`);

      rows = rows[0];
      if (rows.fortune + 3600000 <= Date.now()) {
        let stm = db.prepare(
          `UPDATE USERS SET fortune = ${Date.now()}, coin = coin + ${coin} WHERE id = ${
            message.author.id
          }`
        );
        stm.run();
        stm.finalize();

        message.channel.send(
          `Parabéns <@${
            message.author.id
          }>, Você acaba de ganhar ${coin}, Seu novo saldo é de ${
            rows.coin + coin
          } ${nameCoin}.`
        );
      } else {
        message.channel.send(
          `<@${
            message.author.id
          }>, você ainda está no intervalo de tempo, retorna somente depois das ${convertHours(
            rows.fortune + 3600000
          )}`
        );
      }
    }
  );
};
