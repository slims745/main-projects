const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('spoon', {
      aliases: ['spooning'],
      info: 'only a spoonful',
      usage: 'spoon',
      guildOnly: false,
    });
  }

  async run(message) {
    const msg = await message.channel.send('as we can see, King Bach has presented a rather large spoon to his friend. The humor in this video stems from the fact that King Bach would like to eat ice cream but his friend retorts at him, saying he can only have a spoon full, nothing more. Bach then suddenly changes his expression and body language and reveals that he is indeed in possession of a spoon. And not just any spoon, it is a massive stainless steel spoon. This is funny because you would never expect someone to just be casually in possession of a massive spoon to eat ice cream with. It is completely unorthodox and uncalled for. This is why the video is so humorous and was put on the 2012 Epic Vine compilation playlist on Youtube.');

    }
}