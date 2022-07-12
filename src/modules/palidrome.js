/** Function to check if a number is a palindrome
 * @function
 * @return {boolean}
 * @param {number}
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

  /**Loop through the val
   * @returns {array}
   *
   */
  for (let i = 0; i < valLength / 2; i++) {
    /**
     * check if the first and last item are same
     * @returns {boolean}
     */
    if (val[i] !== val[valLength - 1 - i]) {
      return false;
    }
    return true;
  }
}

module.exports = isPalindrome;
