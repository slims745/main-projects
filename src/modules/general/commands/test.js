const { stripIndents } = require('common-tags');
const { Command } = require('../../../handler');



module.exports = class extends Command {
  constructor() {
    super('test', {
      aliases: ['testing'],
      info: 'run a test ',
      usage: 'test',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send("```running...```");
   
    }
}
