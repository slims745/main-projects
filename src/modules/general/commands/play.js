const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('play', {
      aliases: ['1983748375892365891235902341657903465790234'],
      info: 'plays music',
      usage: 'play',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send('``` attempting to connect ```');

    }
}