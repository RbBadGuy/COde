const Discord = require('discord.js');

const bot = new Discord.Client();


const { token } = require('./config.json');

const { readdirSync, read } = require('fs');

const { join } = require('path');


bot.commands = new Discord.Collection();

const prefix = '-';
//this prefix can be what ever you want ;)

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

bot.on("error", console.error);


//------------------------------------------------------------------------------
bot.on('ready', () => {
    console.log('Bot is ready!');
    bot.user.setActivity('Prefix is: .', { type: "WATCHING" }).catch(console.error)
})
//------------------------------------------------------------------------------

bot.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'noice'){
    message.channel.send('die loser');
  } else if (command == 'rb'){
      message.channel.send('https://www.youtube.com/c/RbBadGuy');
  } else if (command == 'fire'){
      message.channel.send(' oh no you house is in fire what do we do ||https://tenor.com/view/pir%C3%B3mano-meme-jeje-odio-bomberos-gif-15722930  i https://tenor.com/view/travel-fountain-mansion-gif-7238280 || i got u new house yeeeee')
  } else if (command == 'meme'){
     message.channel.send('i am not an meme i am lemmy')
  } else if (command == 'lemmy'){
     message.channel.send('i am not lemmy i am meme')
  }
});

bot.login(token);
