const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const { nameCoin } = require("../config/config.json");

module.exports = async (client, message) => {
  await db.all(
    `SELECT id, fortune, coin FROM users WHERE id = ${message.author.id}`,
    (error, rows) => {
      if (rows.length > 0)
        message.channel.send(
          `<@${message.author.id}>, Seu saldo é de ${rows[0].coin} ${nameCoin}`
        );
      else message.channel.send(`Usuario não localizado!`);
    }
  );
};
