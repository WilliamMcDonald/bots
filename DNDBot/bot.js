

const Discord = require('discord.js');
const client = new Discord.Client();

function isCommand(str, msg) { // Checks for a command
  return msg.content.toLowerCase().startsWith("-" + str); // Don't forget to change back to --
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

function roll(args, message, adv) {
  if (args[1].toLowerCase().includes('d')){

    var info = args[1].split(/[d]+/);

    var rolls = info[0];
    var cap = info[1];
    var rand;

    var numStr = "";

    for(var i = 1; i <= rolls; i++) {
      rand = Math.floor((Math.random() * cap) + 1);

      numStr = numStr + String(rand) + '; ';

      console.log(numStr);

    }
    console.log('=-=-=-=');

    var nums = parseInt(numStr.split(/[ ]+/));

    if (rolls == 1){
      numstr = numStr.substring(0, numStr.indexOf('; ') - 2);
      console.log(numStr);

      if (adv) {
        message.channel.sendMessage("Your rolls are: " + numStr)
      } else {
        message.channel.sendMessage("Here are your rolls: " + numStr);
      }
      
    } else {
      if (adv) {
        message.channel.sendMessage("Your rolls are: " + numStr)
      } else {
        message.channel.sendMessage("Here are your rolls: " + numStr);
      }
    }


  }

}

function checkAdv(args, advantage){
  if (args[2].toLowerCase().startsWith('a')) {
    return true;
  } else return false;
}

client.on('ready', () => { // Readys bot
  console.log("I'm always watching *.* \n =-=-=-=");
});

client.on('message', message => { // Replies to message
  var args = message.content.split(/[ ]+/);
  var advantage = null;

  if (isCommand('help', message)) {
    message.channel.sendMessage("Memes");
  }

  if (isCommand('roll', message)) {
    if (args.length === 1) {
      message.channel.sendMessage('What kind of die? \n Try: `--roll 1d4`');
    } else if (args.length === 2) {
      roll(args, message, advantage);
    } else if (args.length === 3) {
      advantage = checkAdv(args, advantage);
      roll(args, message, advantage);
    } else {
      message.channel.sendMessage('You have too many arguements. \n Try `--roll 1d4 [advantage]`');
    }
  }
});

client.login('Mjk0MzczNzgyMjYzNTYyMjQw.C7UNeQ.suQjY8FK7t1sjgG3n6OEMcgCK4g'); // Client Token


/*
 * https://discordapp.com/developers/applications/me
 * New app
 *
 * Copy Bot ID
 * Got to discordapp.com/oauth2/authorize?client_id=294373782263562240&scope=bot
*/
