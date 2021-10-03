const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('pizza', {
      aliases: ['pizzaing'],
      info: 'my ears burn',
      usage: 'pizza',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send('ay yo the pizza here, my ears burn.');

    }
}
