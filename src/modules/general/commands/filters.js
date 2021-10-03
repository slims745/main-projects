const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('filters', {
      aliases: ['filtering'],
      info: 'filters for music',
      usage: 'filters',
      guildOnly: false,
    });
  }
//xxxx0x - check back 
  async run(message) {
    const msg = await message.channel.send(' Bassboost - 8D - Vaporwave - Nightcore - Phaser - Tremolo - Vibrato - Reverse - Treble - Normalizer - Surrounding - Pulsator - Subboost - Karaoke - Flanger - Gate - hass - Mcompand ');
   
    }
}
