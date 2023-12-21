const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let arr = [];
  let arrOfStr = [];
  let thirdLevelDomain = '';
  let secondLevelDomain = '';
  let topLevelDomain = [];
  let thirdLevelCount = 0;
  let secondLevelCount = 0;
  
  if (domains.length === 0) {
    return {};
  }

  for (let i = 0; i < domains.length; i += 1) {
    arr.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < domains.length; i += 1) {
    arrOfStr.push(domains[i].split('.').reverse().join('.'));
  }

  thirdLevelDomain += `.${arr[0][0]}`;
  secondLevelDomain += `${thirdLevelDomain}.${arr[0][1]}`;

  for (let i = 0; i < arrOfStr.length; i += 1) {
    if (`.${arrOfStr[i]}`.includes(`${secondLevelDomain}.`)) {
      topLevelDomain.push(arrOfStr[i]);
    } 
  }

  for (let i = 0; i < arr.length; i +=1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (`.${arr[i][j]}` === thirdLevelDomain) {
        thirdLevelCount += 1;
      } else if (`${thirdLevelDomain}.${arr[i][j]}` === secondLevelDomain) {
        secondLevelCount += 1;
      } 
    }
  }
 
  res[thirdLevelDomain] = thirdLevelCount;
  res[secondLevelDomain] = secondLevelCount;
  for (domain of topLevelDomain) {
    res[`.${domain}`] = 1;
  }
  return res;
}

module.exports = {
  getDNSStats
};
