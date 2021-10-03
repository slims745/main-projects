const fs = require('fs');
const path = require('path');

class Utils {
  /**
   * @param {string}
   * @returns {Array<string>}
   */
  static readdirSyncRecursive(directory) {
    let files = [];

    fs.readdirSync(directory).forEach(file => {
      const location = path.join(directory, file);

     
      if (fs.lstatSync(location).isDirectory()) {
        files = files.concat(Utils.readdirSyncRecursive(location));
      } else {
        files.push(location);
      }
    });

    return files;
  }

  /**
   * @param {boolean}
   * @returns {string} 
   */
  static boolToString(bool) {
    if (typeof bool === 'boolean') {
      return bool ? 'Yes' : 'No';
    }
    return String(bool);
  }
}

module.exports = Utils;
