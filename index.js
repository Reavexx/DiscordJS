const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "?";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Diese Nachricht hat eine Latenz von ${timeTaken}ms.`);
  }

  else if (command === "summary") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`Die Zusammenfassung des Servers wird hier aufgelistet.`);
  }

  else if (command === "help") {
    const numArgs = args.map(y => parseFloat(y));
    message.reply('In diesem Log finden Sie die Hilfestellung zu dem Reavex Server');
  }

  else if (command === "Duarte") {
    const numArgs = args.map(y => parseFloat(y));
    message.reply('Scheiss Ausländer');
  }
});

client.login("config.MTA1NDM2NDkyMjQxMjI4NTk5Mg.GhyLD-.JkfudHCoKmy9uIa2tMlnfDYlOaq-Yib0HamIFA");