const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('trippin', {
      aliases: ['trippy'],
      info: 'trippy',
      usage: 'trippin',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send('https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Ffbf55832-b9c4-4de2-9cfd-958f3a43ffda.image.png?v=1600202829446');
   
    }
}