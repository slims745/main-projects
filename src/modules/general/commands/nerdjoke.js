const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('nerdjoke', {
      aliases: ['nerd joke'],
      info: 'true ',
      usage: 'nerdjoke',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send('```!false``````funny because its true```');
    }
}
