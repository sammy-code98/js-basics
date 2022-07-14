/**
 * @function - function to add the numbers in an array
 * @param {Array} - the array of numbers to sum
 *  * @returns {Number} - the sum of the numbers

 */

function sumOfNumbers(arrNum) {
  let total = 0;
  for (let i = 0; i < arrNum.length; i++) {
    total += arrNum[i];
  }
  return total;
}

module.exports = sumOfNumbers;
