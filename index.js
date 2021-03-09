const token = process.env.TOKEN;
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const { prefix } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Queen', { type: 'LISTENING' });
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === `${prefix}hits`) {
  if (message.member.voice.channel) {

      const ytdl = require('ytdl-core');

      const connection = await message.member.voice.channel.join();
      const stream = ytdl('https://youtu.be/5JjKm8DBq9U', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

      dispatcher.on('finish', () => message.member.voice.channel.leave());
    } else {
      message.reply('you need to join a voice channel first!');
    }
  }
});

client.login(process.env.TOKEN);
