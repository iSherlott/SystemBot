const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const { nameCoin } = require("../config/config.json");

module.exports = async (message) => {
  let content = message.content.toLowerCase().split(" ");
  let coin = parseInt(content[content.length - 1]);

  if (content.length == 3 && typeof coin == "number") {
    const userId = message.mentions.users.first();

    await db.all(
      `SELECT coin FROM users WHERE id = ${userId.id}`,
      (error, rows) => {
        if (rows.length != 1)
          return message.channel.send(`Usuario não localizado!`);

        rows = rows[0];

        let stm = db.prepare(
          `UPDATE USERS SET coin = coin + ${coin} WHERE id = ${userId.id}`
        );
        stm.run();
        stm.finalize();

        message.channel.send(
          `Valor de ${coin} ${nameCoin} adicionado com sucesso na conta do <@${userId.id}>`
        );
      }
    );
  } else {
    message.channel.send(`Parâmetros informados inválidos!`);
  }
};
