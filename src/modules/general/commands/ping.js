const { stripIndents } = require("common-tags");

const { Command } = require("../../../handler");

module.exports = class extends Command {
  constructor() {
    super("ping", {
      aliases: ["pong"],
      info: "Get the ping of the bot",
      usage: "ping",
      guildOnly: false
    });
  }

  async run(message) {
    const msg = await message.channel.send("Pinging...");
    const ping = Math.round(msg.createdTimestamp - message.createdTimestamp);
    if (ping <= 0) {
      return msg.edit("Please try again...");
    }

    console.log("pinged with", ping, "ms");

    return msg.edit(
      stripIndents`
      🏓 P${"o".repeat(Math.ceil(ping / 1))}ng: \`${ping}ms\`
     
      `
    );
  }
};



