const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type; 
  }
  encrypt(str, key) {
    if (arguments.length <= 1 || typeof str !== 'string' || typeof key !== 'string')  {
      throw new Error('Incorrect arguments!');
    }

    let strOfLetters = str.replaceAll(' ', '');
    let newKey = key.padEnd(strOfLetters.length, key);
    
    let getCharechterNumbers = function(str) {
      let messageNums = [];
      let message = str.toUpperCase();
      for (let i = 0; i < message.length; i += 1) {
        for (let j = 0; j < alphabet.length; j += 1) {
          if (message[i] === alphabet[j]) {
            messageNums.push(j);
          } 
        }
      }
      return messageNums;
    }
    let charachterNumbers = getCharechterNumbers(str);
    let keyCharachterNumbers = getCharechterNumbers(newKey);

    let encryptedNumbers = [];
    for (let i = 0; i < charachterNumbers.length; i += 1) {
      encryptedNumbers.push((charachterNumbers[i] + keyCharachterNumbers[i])%26);
    }

    let encryptedStr = '';
    for (let i = 0; i < encryptedNumbers.length; i += 1) {
      for (let j = 0; j < alphabet.length; j += 1) {
        if (j === encryptedNumbers[i]) {
          encryptedStr += alphabet[j];
        }
      }
    }

    let res = encryptedStr.split('');
    for (let i = 0; i < str.length; i += 1) {
      if (!str[i].match(/[a-z]/i)) {
        res.splice(i, 0, str[i]);
      }
    }
    if (this.type === false) {
      return res.reverse().join('');
    } else {
      return res.join('');
    }
    
  }
  decrypt(str, key) {
    if (arguments.length <= 1 || typeof str !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    let strOfLetters = str.replaceAll(' ', '');
    let newKey = key.padEnd(strOfLetters.length, key);
    
    let getCharechterNumbers = function(str) {
      let messageNums = [];
      let message = str.toUpperCase();
      for (let i = 0; i < message.length; i += 1) {
        for (let j = 0; j < alphabet.length; j += 1) {
          if (message[i] === alphabet[j]) {
            messageNums.push(j);
          } 
        }
      }
      return messageNums;
    }
    let charachterNumbers = getCharechterNumbers(str);
    let keyCharachterNumbers = getCharechterNumbers(newKey);

    let encryptedNumbers = [];
    for (let i = 0; i < charachterNumbers.length; i += 1) {
      if ((charachterNumbers[i] - keyCharachterNumbers[i]) < 0) {
        encryptedNumbers.push(((charachterNumbers[i] - keyCharachterNumbers[i]) + 26)%26);
      }
      encryptedNumbers.push(((charachterNumbers[i] - keyCharachterNumbers[i]))%26);
    }

    let encryptedStr = '';
    for (let i = 0; i < encryptedNumbers.length; i += 1) {
      for (let j = 0; j < alphabet.length; j += 1) {
        if (j === encryptedNumbers[i]) {
          encryptedStr += alphabet[j];
        }
      }
    }

    let res = encryptedStr.split('');
    for (let i = 0; i < str.length; i += 1) {
      if (!str[i].match(/[a-z]/i)) {
        res.splice(i, 0, str[i]);
      }
    }
    if (this.type === false) {
      return res.reverse().join('');
    } else {
      return res.join('');
    }
  }
}
const directMachine = new VigenereCipheringMachine(false);

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));


module.exports = {
  VigenereCipheringMachine
};

