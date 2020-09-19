const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${751258813491052587}!`);
});

mnclient.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
  }
});

client.login('token');