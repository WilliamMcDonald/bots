

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
  message.channel.fetchMessages({limit:msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
}
client.on('ready', () => { // Readys bot
  console.log("I'm in");
});

client.on('message', message => { // Replies to message
  var args = message.content.split(/[ ]+/);

  if (commandIs('draven ',message)) {
    message.channel.sendMessage("LLLEEEAAAGGGUUUEEE OOOFFF DDDRRRAAAVVVEEENNN.")
  }
});

client.login('MjkxNDc2ODg0NTU3MDA0ODAw.C6qCpg.GskOAu2rR4qUMjaHlbtEfgExTv0'); // Client Token


/*
 * https://discordapp.com/developers/applications/me
 * New app
 *
 * Copy Bot ID
 * Got to discordapp.com/oauth2/authorize?client_id=291476884557004800&scope=bot
*/
