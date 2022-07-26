/**
 * @function - function to add two numbers
 * @desc Add two numbers, returns 0 if the sum of the two numbers is greater than 21, if a number = 11, convert to 1 and sum up
 * @param {Number} -a
 * @param {Number}  -b
 * @returns {Number}
 */

const sum = function (a,b) {
  if (a == 11  || b == 1) {
    return (a == 11 || b == 1) 
    
  }else if(a + b > 21){
    return 0
  }else{
    return a + b 
  }
};

module.exports = sum;
