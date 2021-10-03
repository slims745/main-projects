const Toggleable = require('./Toggleable.js');

class Event extends Toggleable {
  /**
   * @param {string}
   */
  constructor(eventName) {
    super();

    this.eventName = eventName;
  }

 
  run() {
    throw new Error('Event is missing run method');
  }
}

module.exports = Event;
