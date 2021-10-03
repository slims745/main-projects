const { stripIndents } = require('common-tags');
const { get } = require("snekfetch");
const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('neko', {
      aliases: ['catgirl'],
      info: 'NSFW - nekos',
      usage: 'neko',
      guildOnly: false,
    });
  }


  async run(message, args, level) { // eslint-disable-line no-unused-vars
    if (!message.channel) return message.response("Cannot display NSFW content in a SFW channel.");
    const msg = await message.channel.send(`<a:typing:397490442469376001> **${message.member.displayName}** is horny...`);
    const { body } = await get("https://nekos.life/api/v2/img/lewd");
    await msg.edit({
      embed: {
        "title": "tits or ass?",
        "url": body.url,
        "image": {
          "url": body.url
        },
      }
    });
  }
}



