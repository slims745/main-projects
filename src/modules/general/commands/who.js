const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('who', {
      aliases: ['whoing'],
      info: 'whos that',
      usage: 'who',
      guildOnly: false,
    });
  }

 async run(message) {
  const messages = ["joe mama",
                    "stfu",
                    "joe mama"
          	      
                   ]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

		return message.channel.send(randomMessage);
    }
}