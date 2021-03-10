const token = process.env.TOKEN;
const fs = require('fs');
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const { prefix } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Queen | aj;songlist', { type: 'LISTENING' });
});

client.on('message', message => {
	if (message.content === `${prefix}songlist`) {
		message.channel.send('`aj;br` - **Bohemian Rhapsody**\n`aj;dsmn` - **Don\'t Stop Me Now**\n`aj;goflb` - **Good Old-Fashioned Lover Boy**\n`aj;kq` - **Killer Queen**\n`aj;stl` - **Somebody to Love**\n`aj;ymbf` - **You\'re My Best Friend**');
	}
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === `${prefix}br`) {
  if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('mp3/bohemianrhapsody.mp3');
      dispatcher.on('finish', () => message.member.voice.channel.leave());
    } else {
      message.reply('you need to join a voice channel first!');
    }
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === `${prefix}dsmn`) {
  if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('mp3/dontstopmenow.mp3');
      dispatcher.on('finish', () => message.member.voice.channel.leave());
    } else {
      message.reply('you need to join a voice channel first!');
    }
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === `${prefix}goflb`) {
  if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('mp3/goodoldfashionedloverboy.mp3');
      dispatcher.on('finish', () => message.member.voice.channel.leave());
    } else {
      message.reply('you need to join a voice channel first!');
    }
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === `${prefix}kq`) {
  if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('mp3/killerqueen.mp3');
      dispatcher.on('finish', () => message.member.voice.channel.leave());
    } else {
      message.reply('you need to join a voice channel first!');
    }
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === `${prefix}stl`) {
  if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('mp3/somebodytolove.mp3');
      dispatcher.on('finish', () => message.member.voice.channel.leave());
    } else {
      message.reply('you need to join a voice channel first!');
    }
  }
});

client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === `${prefix}ymbf`) {
  if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('mp3/youremybestfriend.mp3');
      dispatcher.on('finish', () => message.member.voice.channel.leave());
    } else {
      message.reply('you need to join a voice channel first!');
    }
  }
});

client.login(process.env.TOKEN);
