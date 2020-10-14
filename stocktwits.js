const Discord = require('discord.js');
const { config } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!stocktwits') {
		message.channel.send('write code for stocktwits API here');
	}
});

client.login(config.token);