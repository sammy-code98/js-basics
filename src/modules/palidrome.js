/** Function to check if a number is a palindrome
 * @function
 * @return {boolean}
 * @param {number} - val
 */

function isPalindrome(val) {
  /**Find length of value
   *
   * @type {number}
   *
   * Convert the lenght of the value to string
   * before finding length of string
   *
   */
  const valLength = val.toString().length;

  /**
   * Loop through the val
   */
  for (let i = 0; i < valLength; i++) {
    /**
     * check if the first and last item are same
     * @returns {boolean}
     */
    if (val[i] !== val[valLength - 1]) {
      /** if number not a palidrome return false else return true */
      return false;
    }
    return true;
  }
}

module.exports = isPalindrome;
