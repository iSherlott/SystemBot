const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const { nameCoin } = require("../config/config.json");

const convertDate = require("../helpers/date_timestamp_convert");
const convertHours = require("../helpers/hours_timestamp_convert");
const resetTimeDay = require("../helpers/reset_timestamp");

module.exports = async (message) => {
  let coin = 1000;

  await db.all(
    `SELECT id, daily, coin FROM users WHERE id = ${message.author.id}`,
    (error, rows) => {
      if (rows.length != 1)
        return message.channel.send(`Usuario não localizado!`);

      rows = rows[0];
      if (resetTimeDay(rows.daily) + 86400000 <= Date.now()) {
        let stm = db.prepare(
          `UPDATE USERS SET daily = ${
            resetTimeDay(rows.daily) + 86400000
          }, coin = coin + ${coin} WHERE id = ${message.author.id}`
        );
        stm.run();
        stm.finalize();

        message.channel.send(
          `Parabéns <@${message.author.id}>, Seu novo saldo é de ${rows.coin} ${nameCoin}.`
        );
      } else {
        message.channel.send(
          `<@${
            message.author.id
          }>, você já obteve o daily de hoje, tente novamente depois de ${convertDate(
            rows.daily + 86400000
          )} às ${convertHours(rows.daily)}`
        );
      }
    }
  );
};
