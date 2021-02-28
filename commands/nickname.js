module.exports = (client, message) => {
  const user = client.guilds.cache.map((e) =>
    e.members.cache.get(message.author.id)
  );

  const nick = message.content.replace(/!nickname/i, "").trim();

  user[0].setNickname(nick);
};
