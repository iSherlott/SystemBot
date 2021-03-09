# SystemBot

Bot controlador de servidor do discord, projetado exclusivamente para o servidor <a href="https://discord.gg/vr2eC6wDFt">Happy Sugar Life</a>, Codigo foi liberado para fim educativo para terceiros e amigos.

Favor, colocar os devidos creditos a o repositorio e outros que venho a referenciar.

## dependencies

`discord.js: ^12.5.1`
`jimp: ^0.16.1`

## Observation

Dentro da pasta "config", crie um arquivo "config.json" contendo as configurações para uso, assim como o exemplo abaixo:<br />

`{ "token": "Token_Do_Seu_Bot", "prefix": "Tipo_do_Prefixo_de_Uso", "coin": "Nome_da_Moeda_do_Server", "id_bot": "id_do_Seu_Bot", "rolesChannel": "Id_do_Canal_de_Tag", "rulesChannel": "Id_do_Canal_de_Regras", "colorChannel": "Id_do_Canal_de_Cores"}`

Lembrando que todos os emojis usado nesse codigo se encontra na pasta <a href="https://github.com/iSherlott/SystemBot/tree/master/assets">assets</a>

Nos canais `RULES` e `COLOR`, só poderá conter 1 mensagem<br />
No canal de `TAG` ele ira apagar tudo que há nele para refazer as mensagem, toda vez que o bot for inicializado.

## Screenshot

<details>
  <summary>Menu Exemplo</summary>
  <img src="https://github.com/iSherlott/SystemBot/blob/main/screenshot/menu.PNG?raw=true">
</details>

<details>
  <summary>Welcome Exemplo</summary>
  <img src="https://github.com/iSherlott/SystemBot/blob/main/screenshot/welcome.PNG?raw=true">
</details>

<details>
  <summary> Exemplo</summary>
  <img src="https://github.com/iSherlott/SystemBot/blob/main/screenshot/color.PNG?raw=true">
</details>

## Update:

## Releases :

### Release 3.0.0

- Atualização do Readme.
- Restringindo comandos Aslan, Daily, Fortune e Roulette para somene canal comando.
- Criando o setor Price para exibir valores dos comandos.
- Reduzindo valor Aslan para 2500.
- Separado valores no arquivo config.
- Aba rank criada
- Sistema de Level e EXP.
- Receber cargo ao atingir leveis.
- Helper para restringir comandos criado.
- Sala de sugestão e comando de votação em sugestão criado.
- Cobrança de valores em color.
- Mensagem temporaria no color ao adquirir valor.
- Comando addCoin e subCoin para adicionar e subtrair valores a conta citada.
- Comando serverInfo criado para exibir informações do servidor.
- Comando register criado para registra usuarios não cadastrado.
- Comando Help dinamico, helper só exibe os comandos que o usuario tem permissão.
- Acrecentado novos gif no assets.
- Sala tematica Classroom criada juntamente com seu cargo.
- Helper criado para liberar router free para o aslan.
- Reformulado routes.
- Criado arquivo betaTest.js na raiz para teste de comandos.

### Release 2.0.0

- Atualização do Readme.
- Nova implementação de controle de rotas.
- Separação das salas tematicas para as categorias: Gamer, Discotheque e Streaming.

### Release 1.1.0

- Atualização do Readme.
- Criação Do banco SQLite3 ao clicar no flag dos Rules.
- Criação dos comando Daily e Fortune.
- Criação dos comandos Disconnect e Nickname.

### Release 1.0.4

- Atualização do Readme.
- Ramificando os comandos hug, hit, kiss e kick.
- Criação do comando aslan, onde desloga o aslan.
- Criação do comando disconnect, para a menção junto ao comando desloga a pessoa.
- Criação de embed informando quem deslogou e gif relacionada.

### Release 1.0.3

- Atualização do Readme.
- Bloquear comandos por DM.
- Atualização do package.
- Criação do comando hug.
- Criação do comando hit.
- Criação do comando kiss.
- Criação do comando kick.
- Criação da embed dos comandos hug, hit, kiss e kick.

### Release 1.0.2

- Atualização do Readme

### Release 1.0.1

- Criação das Tag
- Criação das Color
- Criação das Rues
- Boas Vindas Personalizado

## Credit

Parceiro: <a href="https://github.com/TheNewGuy100">Pedro Bohn Costa</a>

Base utilizada do canal: <a href="https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA">Worn Off Key</a>
