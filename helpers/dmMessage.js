module.exports = (client, id, msg) => {
  client.users.cache.get(id).send(msg);
};
