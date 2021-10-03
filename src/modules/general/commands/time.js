const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('time', {
      aliases: ['timeing'],
      info: 'might check the time',
      usage: 'time',
      guildOnly: false,
    });
  }



async run(message) {
  const messages = ["time for you to get a watch",
                    "get your own time"
          	      
                   ]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

		return message.channel.send(randomMessage);
    }
}