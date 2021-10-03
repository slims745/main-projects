const { stripIndents } = require("common-tags");

const { Command } = require("../../../handler");

module.exports = class extends Command {
  constructor() {
    super("coollines", {
      aliases: ["thelinesarecool"],
      info: "cool gif ",
      usage: "coollines",
      guildOnly: false
    });
  }

  async run(message) {
    const msg = await message.channel.send(
      "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Fdf4107edd8b4fe79455810ea6222e087.gif?v=1605709721885"
    );
  }
};
