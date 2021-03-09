const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");
const { nameCoin } = require("../config/config.json");

module.exports = (message, value) => {
  return new Promise((res, rej) => {
    db.all(
      `SELECT id, coin FROM users WHERE id = ${message.author.id}`,
      (error, rows) => {
        if (rows[0].coin >= value) {
          let stm = db.prepare(
            `UPDATE USERS SET coin = coin - ${value} WHERE id = ${message.author.id}`
          );
          stm.run();
          stm.finalize();
          res(true);
        } else
          message.channel.send(
            `Esse comando exige ${value} ${nameCoin}, Seu saldo é insuficiente para completar esse comando`
          );
      }
    );
  });
};
