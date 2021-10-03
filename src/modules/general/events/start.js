const { Event } = require('../../../handler');
//for reset use cmdprompt refresh
module.exports = class extends Event {
  constructor() {
    super('ready');
  }

  run(client) {
    console.log(`Logged in as ${client.user.tag},
    with ${client.users.cache.size} Online Users,
    hosting ${client.guilds.cache.size} Servers,
    in ${client.channels.cache.size} Channels,
    with ${client.emojis.cache.size} Emojis,
    with 2 Domains,
    with 3 Backup Domains.`);
  }
};


