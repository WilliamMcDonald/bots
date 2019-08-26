// Compatible with Yo It YoshiBros server atm

const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg) {
  return msg.content.toLowerCase().startsWith("^" + str);
}

function pluck(array) {
  return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
  if(pluck(mem.roles).includes(role)){
    return true;
  } else {
    return false;
  }
}

client.on('ready', () => {
  console.log("I'm in");
});

client.on('message', message => {
  var args = message.content.split(/[ ]+/);

  if(commandIs("hi", message)) {
    message.channel.sendMessage('Get outta my face, ' + message.author.username);
  }

  if (commandIs("chocymilk", message)) {
    if (args.length === 1) {
      message.channel.sendMessage('You really screwed up now, try again. \n \n You might want to try: `^chocymilk [number]`');
    } else if (args.length === 2) {
      message.channel.sendMessage('Your memes are stale. Your number is ' + args[1]);
    } else {
      message.channel.sendMessage('Too many arguments, retard.');
    }
  }

  if(commandIs("say", message)) {
    if(hasRole(message.member, "Nerd") || hasRole(message.member, "Sub Nerd")) {
      if(args.length === 1) {
        message.channel.sendMessage('You really screwed up now, try again. \n \n You might want to try: `^say [message]`');
      } else {
        message.channel.sendMessage(args.join(" ").substring(5));
      }
    } else {
      message.channel.sendMessage("GIT GUD");
    }
  }

  if(commandIs("delete", message)) {
    if(hasRole(message.member, "Nerd") || hasRole(message.member, "Sub Nerd")) {
      if(args.length >= 3) {
        message.channel.sendMessage('Too many arguments, retard. \n \n Try `^delete [number of messages to delete]`');
      } else {
        var msg;
        if(args.length === 1) {
          msg=2;
        } else {
          msg=parseInt(args[1]);
        }
        message.channel.fetchMessages({limit: msg}).then(messages=> message.channel.bulkDelete(messages)).catch(console.error);
      }
    } else {
      message.channel.sendMessage("GIT GUD");
    }
  }
});

client.login('MjkxMTQ1Mjc4MDIxNTY2NDY2.C6lN3g._I1TDo_2mwB0HKVsmbk2dr7tv9A');
