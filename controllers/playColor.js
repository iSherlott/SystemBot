const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");
const { nameCoin } = require("../config/config.json");

module.exports = (userId, value, channel) => {
  return new Promise((res, rej) => {
    db.all(`SELECT id, coin FROM users WHERE id = ${userId}`, (error, rows) => {
      if (rows[0].coin >= value) {
        let stm = db.prepare(
          `UPDATE USERS SET coin = coin - ${value} WHERE id = ${userId}`
        );
        stm.run();
        stm.finalize();
        res(true);
      } else
        channel
          .send(
            `Esse comando exige ${value} ${nameCoin}, Seu saldo é insuficiente para completar esse comando`
          )
          .then((message) =>
            setTimeout(() => {
              message.delete();
            }, 8000)
          );
    });
  });
};
