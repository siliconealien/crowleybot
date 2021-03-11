const token = process.env.TOKEN;
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const { prefix } = require("./config.json");

const ytdl = require('ytdl-core');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Queen | aj;play', { type: 'LISTENING' });
});

client.on('message', message => {
	if (message.content === `${prefix}guilds`) {
		client.guilds.cache.forEach(guild => {
		  console.log(`${guild.name} | ${guild.id}`);
		})
	}
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === `${prefix}play`) {
  if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
			const stream = ytdl('https://youtu.be/j440-D5JhjI', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);
      dispatcher.on('finish', () => message.member.voice.channel.leave());
    } else {
      message.reply('you need to join a voice channel first!');
    }
  }
});

client.login(process.env.TOKEN);
