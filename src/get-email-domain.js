const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let i = email.indexOf('@');
  let res = email.slice(i + 1, email.length);
  if (res.includes('@')) {
    let index = res.indexOf('@');
    return res.slice(index+ 1, email.length);
  } else {
    return res;
  }
}

module.exports = {
  getEmailDomain
};
