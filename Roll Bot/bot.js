

const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg) { // Checks for a command
  return msg.content.toLowerCase().startsWith("--" + str);
}

function pluck(array) { // Plucks name
  return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) { // Checks role
  if(pluck(mem.roles).includes(role)){
    return true;
  } else {
    return false;
  }
}

function meme(num, message) {
  if (num == 69) {
    message.reply('Your roll was ' + num + '... ( ͡° ͜ʖ ͡°).');
  } else if (num == 12) {
    message.reply('Your roll was ' + num + '... and chino is a bitch.');
  } else if (num == 42) {
    message.reply('Your roll was ' + num + '... fuck, I forgot the extra 0.');
  } else if (num == 100) {
    message.reply('Your roll was ' + num + '. OOOOH BABY A TRIPLE!');
  } else {
    message.reply('Your roll was ' + num);
  }
}

client.on('ready', () => { // Readies bot
  console.log("I'm in");
});

client.on('message', message => { // Replies to message
  var args = message.content.split(/[ ]+/);

  if (commandIs('roll', message)) {
    var rand = Math.floor((Math.random() * 100) + 1);

    meme(rand, message)


  }

  if (commandIs('forceroll', message)) {
    if (args.length === 1) {
      message.channel.sendMessage('You really screwed up now, try again. \n \n You might want to try: `--forceroll [number]`');
    } else if (args.length === 2) {
      var num = parseInt(args[1]);
      if (Number.isInteger(num)) {
        meme(num, message);
      } else {
        message.reply("Hey retard, put a fucking number in.");
      }
    } else {
      message.channel.sendMessage('Too many arguments, Fucktard.');
    }
  }
});

client.login('MjkxMjYyMjE5NjgzODg5MTUy.C6m6lw.RnLGhMHTMcrWh6GHfgx7LY0sbUE'); // Client Token


/*
 * Copy Bot ID
 * Got to discordapp.com/oauth2/authorize?client_id=291262219683889152&scope=bot
 * Select Server
 * Click authorize
*/
