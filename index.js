const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');

dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (process.env.MAINTENANCE_MODE === 'true') {
    message.channel.send(process.env.MAINTENANCE_MESSAGE);
    return;
  }

  // Traitement des commandes ici
});

client.login(process.env.DISCORD_TOKEN);
