/**
 * Name of User
 * @type {string}
 *
 */
const userName = "John Doe";

/**
 * Age of user
 * @type {number}
 */
const userAge = 20;

/**
 * Function to Concatenate a string variable with a number variable
 * @function 
 * @returns {string} - String variable concatenated with a number variable
 */

function concatenate() {
  return userName + userAge;
}

export { concatenate };
