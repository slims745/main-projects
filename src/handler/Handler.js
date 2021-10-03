const { Client } = require("discord.js");

const Feature = require("./Feature.js");
const Command = require("./Command.js");
const Event = require("./Event.js");
const Utils = require("../Utils.js");

class Handler {
  /**
   * @param {Client} client
   * @param {string} prefix
   */
  constructor(client, prefix) {
    /**
     * @type {Client}
     */
    this.client = client;

    /**
     * @type {string}
     */
    this.prefix = prefix;

    /**
     * @type {Map<string, Feature>}
     */
    this.features = new Map();

    /**
     * @type {Map<string, Command>}
     */
    this.commands = new Map();

    /**
     * @type {Map<string, Command>}
     */
    this.aliases = new Map();

    /**
     * @type {Map<string, Array<Event>>}
     */
    this.events = new Map();
  }

  /**
   * @param {string}
   * @param {object}
   * @returns {undefined}
   */
  load(directory, dependencies) {
    this.directory = directory;
    this.dependencies = dependencies;

    const nodes = Utils.readdirSyncRecursive(directory)
      .filter(file => file.endsWith(".js"))
      .map(require);

    nodes.forEach(Node => {
      if (Node.prototype instanceof Feature) {
        this.loadFeature(new Node(dependencies));
      }
    });

    nodes.forEach(Node => {
      if (Node.prototype instanceof Command) {
        const loaded = Array.from(this.commands.values()).some(
          command => command instanceof Node
        );

        if (!loaded) {
          this.loadCommand(new Node(dependencies));
        }
      }

      if (Node.prototype instanceof Event) {
        const loaded = Array.from(this.events.values()).some(events =>
          events.some(event => event instanceof Node)
        );

        if (!loaded) {
          this.loadEvent(new Node(dependencies));
        }
      }
    });

    this.register();
  }

  /**
   * @param {Feature}
   */
  loadFeature(feature) {
    if (this.features.has(feature.name)) {
      throw new Error(
        `Can't load Feature, the name '${feature.name}' is already used`
      );
    }

    this.features.set(feature.name, feature);

    feature.commands.forEach(command => {
      this.loadCommand(command);
    });

    feature.events.forEach(event => {
      this.loadEvent(event);
    });
  }

  /**
   * @param {Command}
   */
  loadCommand(command) {
    if (this.commands.has(command.name) || this.aliases.has(command.name)) {
      throw new Error(
        `Can't load command, the name '${command.name}' is already used as a command name or alias`
      );
    }

    this.commands.set(command.name, command);

    command.aliases.forEach(alias => {
      if (this.commands.has(alias) || this.aliases.has(alias)) {
        throw new Error(
          `Can't load command, the alias '${alias}' is already used as a command name or alias`
        );
      }

      this.aliases.set(alias, command);
    });
  }

  /**
   * @param {Event}
   */
  loadEvent(event) {
    const events = this.events.get(event.eventName) || [];
    events.push(event);

    this.events.set(event.eventName, events);
  }

  register() {
    for (const [name, handlers] of this.events) {
      this.client.on(name, (...params) => {
        for (const handler of handlers) {
          // Run event if enabled
          if (handler.isEnabled) {
            try {
              handler.run(this.client, ...params);
            } catch (err) {
              console.error(err);
            }
          }
        }
      });
    }

    this.client.on("message", async message => {
      if (message.author.bot || !message.content.startsWith(this.prefix)) {
        return;
      }

      const [command, ...args] = message.content
        .slice(this.prefix.length)
        .split(" ");

      let cmd = this.commands.get(command.toLowerCase());

      if (!cmd) {
        cmd = this.aliases.get(command.toLowerCase());
      }

      if (!cmd || !cmd.isEnabled) {
        return;
      }

      if (cmd.guildOnly && !message.guild) {
        message.channel.send("This command is only available in guilds");
        return;
      }

      try {
        await cmd.run(message, args);
      } catch (err) {
        console.error(err);
        message.reply("bleep bloop an error occured :C");
      }
    });
  }
}

module.exports = Handler;
