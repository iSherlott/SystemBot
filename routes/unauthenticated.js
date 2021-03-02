module.exports = (client, alias, message) => {
  switch (alias) {
    case "test4":
      message.channel.send(`Test Okey in unauthenticated`);
      break;
  }
};
