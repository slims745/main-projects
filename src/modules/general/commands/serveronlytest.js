const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('serveronlytest', {
      aliases: ['server only'],
      info: 'only in server',
      usage: 'serveronlytest',
      guildOnly: true,
    });
  }

  async run(message) {
    const msg = await message.channel.send('running');

    }
}