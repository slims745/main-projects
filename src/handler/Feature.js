const Command = require('./Command.js');
const Event = require('./Event.js');
const Toggleable = require('./Toggleable.js');

class Feature extends Toggleable {
  /**
   * @param {string} name - The name of this Feature
   */
  constructor(name) {
    super();

    if (typeof name !== 'string') {
      throw new TypeError('Feature name must be a string');
    }

    /**
     * @type {String}
     */
    this.name = name;

    /**
     * @type {Array<Command>}
     */
    this.commands = [];

    /**
     * @type {Array<Event>}
     */
    this.events = [];
  }

  /**
   * @param {Command} 
   */
  registerCommand(command) {
    if (!(command instanceof Command)) {
      throw new TypeError("Can't register command, it does not extend Command");
    }

    this.commands.push(command);
  }

  /**
   * @param {Event} event 
   */
  registerEvent(event) {
    if (!(event instanceof Event)) {
      throw new TypeError("Can't register event, it does not extend Event");
    }

    this.events.push(event);
  }

  /**
   * @returns {undefined}
   * @override
   */
  toggle() {
    if (this.isEnabled) {
      this.disable();
    } else {
      this.enable();
    }
  }

  /**
   * @returns {undefined}
   * @override
   */
  enable() {
    super.enable();

    this.commands.forEach(command => command.enable());
    this.events.forEach(event => event.enable());
  }

  /**
   * @returns {undefined}
   * @override
   */
  disable() {
    super.disable();

    this.commands.forEach(command => command.disable());
    this.events.forEach(event => event.disable());
  }
}

module.exports = Feature;
