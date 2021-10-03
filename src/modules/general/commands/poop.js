const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('poop', {
      aliases: ['poopy'],
      info: 'gross',
      usage: 'poop',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send('stinkaroo');

    }
}





