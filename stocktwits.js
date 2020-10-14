const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!stocktwits') {
		message.channel.send('write code for stocktwits API here');
	}
});

client.login(process.env.BOT_TOKEN);