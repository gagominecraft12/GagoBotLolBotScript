const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${NzQyNDU4MjE1MjA3NDAzNjYx.XzGaGA.KM64K1sJwyVZmXXHG93_z_hcZDU}!`);
});

mnclient.on('message', msg => {
    if (msg.content === 'help') {
      msg.reply('Want To Help?, DM Me For Help');
  }
});

client.login('token');
