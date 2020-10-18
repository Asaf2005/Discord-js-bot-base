```
made by Asaf Sivan
Github - @AsafSivan1 
```
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv-flow').config();
require("./functions")(client);

const config = {
    token: process.env.token,
    prefix: process.env.prefix
}


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

module.exports = {
  client: client
}

client.login(config.token)
