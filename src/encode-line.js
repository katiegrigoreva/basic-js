const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let count = 0;
  
  for (let i = 0; i < str.length; i += 1) {
    count += 1;
    if (str[i] !== str[i + 1]) {
      if (count === 1) {
        newStr += `${str[i]}`;
        count = 0;
      } else {
        newStr += `${count}${str[i]}`;
        count = 0;
      }
    } 
  }
  return newStr;
}

module.exports = {
  encodeLine
};
