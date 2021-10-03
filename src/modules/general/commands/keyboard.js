const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('keyboard', {
      aliases: ['keyboarding'],
      info: 'keyboards',
      usage: 'keyboard',
      guildOnly: false,
    });
  }

 
 async run(message) {
  const messages = ["https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Ff%2C.nsdnjklfhasdu.PNG?v=1599135991273"
          	      
                   ]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

		return message.channel.send(randomMessage);
    }
}