const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('support', {
      aliases: ['sdev'],
      info: 'support the devs with cool merch ',
      usage: 'support',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send('https://slims745.glitch.me');
   
    }
}