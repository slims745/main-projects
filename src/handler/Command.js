const Toggleable = require('./Toggleable.js');

class Command extends Toggleable {
  /**
   * @param {string} 
   * @param {object} 
   * @param {Array<string>} [options.aliases] 
   * @param {string} [options.info] 
   * @param {string} [options.usage] 
   * @param {boolean} [options.guildOnly] 
   */
  constructor(name, options) {
    super();

    this.name = name;

    if (!Array.isArray(options.aliases)) {
      throw new TypeError('Aliases must be an array');
    }
    options.aliases.forEach(alias => {
      if (typeof alias !== 'string') {
        throw new TypeError('Aliases array must contain strings only');
      }
    });
    this.aliases = options.aliases;

    if (!(typeof options.info === 'string')) {
      throw new TypeError('Info must be a string');
    }
    this.info = options.info;

    if (!(typeof options.usage === 'string')) {
      throw new TypeError('Usage must be a string');
    }
    this.usage = options.usage;

    if (!(typeof options.guildOnly === 'boolean')) {
      throw new TypeError('Guild only must be a boolean');
    }
    this.guildOnly = options.guildOnly;
  }

  
  run() {
    throw new Error(`Command '${this.name}' is missing run method`);
  }
}

module.exports = Command;
