module.exports = (client, id) => {
  client.channels
    .fetch(id)
    .then((channel) => channel.messages.fetch())
    .then((messages) => messages.forEach((message) => message.delete()));
};
