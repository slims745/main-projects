const { stripIndents } = require("common-tags");

const { Command } = require("../../../handler");

module.exports = class extends Command {
  constructor() {
    super("stop", {
      aliases: ["152716777703037483092"],
      info: "stops music",
      usage: "stop",
      guildOnly: false
    });
  }

  //(xxxxx0)fix no input

  async run(message) {
    const messages = ["```attempting to disconnect```"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return message.channel.send(randomMessage);
  }
};
