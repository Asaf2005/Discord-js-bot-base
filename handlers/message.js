const {client} = require('../index');
require('dotenv-flow').config();

const config = {
    prefix: process.env.prefix
}

client.on('message',async  message => {
    var prefix = config.prefix
    client.prefix = prefix
    let prefix2 = `<@!${client.user.id}>`
    let msg = message.content.toLowerCase() || message.content.toUpperCase();
    if (!msg.startsWith(prefix))
    if (!msg.startsWith(prefix2)) return undefined;
    if (message.author.bot) return undefined
    let args = msg.startsWith(prefix) ? message.content
      .slice(prefix.length)
      .trim()
      .split(" ") : message.content
      .slice(prefix2.length)
      .trim()
      .split(" ")
    var guild = message.guild;
    let command = args.shift().toLowerCase();
    async function send(text) {
      message.channel.send(text);
    }
  
    let cmd;
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else return;
    cmd.run(client, message, args, prefix);
})
