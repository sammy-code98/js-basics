/**
 * @function - function to add two numbers
 * @desc Add two numbers, returns 0 if the sum of the two numbers is greater than 21, if a number = 11, convert to 1 and sum up
 * @param {*} a
 * @param {*} b
 * @returns {Number}
 */

const sum = function complexSum(a, b) {
  if (a + b > 21) {
    return 0;
  } else if (a || b === 11) {
    return (a || b == 11) + 1;
  } else {
    return a + b;
  }
};

module.exports = sum;
