const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('charm', {
      aliases: ['charming'],
      info: 'send a charm',
      usage: 'charm',
      guildOnly: false,
    });
  }

 async run(message) {
  const messages = ["https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Fimage0%20(3).jpg?v=1593911430067"
          	             ]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];         
		return message.channel.send(randomMessage);
    }
}