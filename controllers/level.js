const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.db");

const roleByLevel = require("./roleByLevel");

module.exports = (client) => {
  client.on("message", async (message) => {
    if (message.author.bot) return;
    const { member } = message;

    await db.all(
      `SELECT id, exp, level FROM users WHERE id = ${member.id}`,
      async (error, rows) => {
        if (rows.length != 1) return;

        rows = rows[0];
        if (rows.exp >= getNeededXp(rows.level)) {
          let roleName = roleByLevel(rows.level);

          if (roleName) {
            const role = message.guild.roles.cache.find(
              (role) => role.name === roleName
            );
            const memberId = message.guild.members.cache.find(
              (guildMember) => guildMember.id === member.id
            );

            memberId.roles.add(role);
          }

          message.channel.send(
            `Parabéns <@${member.id}> Você chegou ao level ${rows.level + 1}`
          );

          addXP(member.id, rows.level + 1, 10);
        } else addXP(member.id, rows.level, 10);
      }
    );
  });

  const getNeededXp = (level) => level * level * 100;

  const addXP = (userId, level, addXP) => {
    let stm = db.prepare(
      `UPDATE USERS SET exp = exp + ${addXP}, level = ${level} WHERE id = ${userId}`
    );
    stm.run();
    stm.finalize();
  };
};
