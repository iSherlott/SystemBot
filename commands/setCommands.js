const setCommands = [];

const jsonCommandsOwner = {
  clearall: "Deleta todas as mensagem do channel.",
  addcoin: "Adicionar moedas a o jogador mencionado.",
  subcoin: "Subtrai moedas a o jogador mencionado.",
  test: "Comando em desenvolvimento nível ADM.",
};

const jsonCommandsSupport = {
  disconnect: "Mencione uma pessoa a ser desconectada.",
  register: "Registra um usuario do banco de dados.",
  beta: "Comando em desenvolvimento nível ADM.",
};

const jsonCommandsMember = {
  help: "Verifica todos os comandos existente.",
  serverinfo: "Obtem todas as informações sobre o servidor.",
  kiss: "Envia um embed com gif beijando a pessoa mencionada.",
  kick: "Envia um embed com gif chutando a pessoa mencionada.",
  hug: "Envia um embed com gif abraçando a pessoa mencionada.",
  hit: "Envia um embed com gif socando a pessoa mencionada.",
  daily: "Obtem moedas para sua conta, diariamente!",
  fortune: "Obtem moedas para sua conta, por hora!",
  wallet: "Informa o valor de moedas em sua conta.",
  roulette: "Um player do channel que você está será desconectado.",
  nickname: "Edita o seu nickname",
  aslan: "Faz o aslan feliz!",
};

const jsonCommands = Object.assign(
  {},
  jsonCommandsOwner,
  jsonCommandsSupport,
  jsonCommandsMember
);

for (let key in jsonCommands) setCommands.push(key);

exports.setCommands = setCommands;
exports.jsonCommands = jsonCommands;
exports.jsonCommandsOwner = Object.assign(
  {},
  jsonCommandsOwner,
  jsonCommandsSupport,
  jsonCommandsMember
);
exports.jsonCommandsSupport = Object.assign(
  {},
  jsonCommandsSupport,
  jsonCommandsMember
);
exports.jsonCommandsMember = jsonCommandsMember;
