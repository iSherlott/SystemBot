const roleClaim = require("./role-claim");

module.exports = (client, id) => {
  client.channels
    .fetch(id)
    .then((channel) => channel.messages.fetch())
    .then((messages) => messages.forEach((message) => message.delete()));

  setTimeout(function () {
    roleClaim(client, "Gênero", {
      maleSign: "Masculino",
      femaleSign: "Feminino",
      aslan: "Aslan",
      naoBinario: "Não-Binário",
    }),
      roleClaim(client, "Idade", {
        adult: "18+",
        childer: "-18",
        old: "Na Casas das 30",
      }),
      roleClaim(client, "Status", {
        solteiro: "Solteiro",
        namorando: "Namorando",
        casado: "Casado",
        enrolado: "Enrolado",
        dilacerador: "Dilacerador de Cavidade",
        operadorTuneladora: "Operador de Tuneladora",
        desativadoInutilizado: "Desativado por Inutilidade",
      }),
      roleClaim(client, "Orientação", {
        homossexual: "Homossexual",
        heterossexual: "Heterossexual",
        sexualmenteFluido: "Sexualmente Fluído",
        pansexual: "Pansexual",
        demissexual: "Demissexual",
        bissexual: "Bissexual",
        assexual: "Assexual",
        furry: "Furry",
        desativado: "Sexualmente Desativado",
        hcpatack: "Helicóptero de Ataque",
      }),
      roleClaim(client, "Orientação Politica", {
        capitalista: "Capitalista",
        anarquista: "Anarquista",
        antiComunismo: "AntiComunismo",
        comunista: "Comunista",
        feudalismo: "A Favor do Feudalismo",
      }),
      roleClaim(client, "Salas Tematicas", {
        developer: "Developer",
        rpg: "Jogadores de RPG",
      }),
      roleClaim(client, "Plataforma", {
        computador: "Computador",
        nasa: "Desktop da Nasa",
        celular: "Celular",
        console: "Console",
        geladeira: "Geladeira",
        ltxuxa: "Laptop da Xuxa",
      });
  }, 10000);
};
