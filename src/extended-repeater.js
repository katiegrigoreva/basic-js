const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let addStr = '';
  if (typeof str !== 'string') {
    str += '';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (typeof options.addition !== 'string') {
    options.addition += '';
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  
  console.log(options.addition);
  for (let i = 0; i < options.additionRepeatTimes; i += 1) {
    addStr += options.addition;
    if (i + 1 < options.additionRepeatTimes) {
      addStr += options.additionSeparator;
    }
  }
  if (options.additionRepeatTimes === undefined) {
    addStr += options.addition;
    
  } 
  str = str + addStr;
  for (let i = 0; i < options.repeatTimes; i += 1) {
    res += str;
    if (i + 1 < options.repeatTimes) {
      res += options.separator;
    }
  }
  if (options.repeatTimes === undefined) {
    res += str;
  }
  return res;
}

module.exports = {
  repeater
};
