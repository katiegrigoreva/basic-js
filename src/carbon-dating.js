const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let A = sampleActivity;

  if (typeof A !== 'string' || typeof +A !== 'number' || Function.length === 0 || +A <= 0 || isNaN(A) || +A >= 15) {
    return false;
  } 
  return Math.ceil(Math.log(MODERN_ACTIVITY/+A)*HALF_LIFE_PERIOD/Math.LN2);
}

module.exports = {
  dateSample
};
