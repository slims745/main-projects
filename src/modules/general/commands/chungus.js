const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('chungus', {
      aliases: ['chungusing'],
      info: 'chungus yeah',
      usage: 'chungus',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send('Wholesome 100 Keanu 100 big chungus 100 epic 100 destruction 100');
   
    }
}
