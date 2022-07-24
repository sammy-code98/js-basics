/**
 * @function - function to find the last character of a string
 * @param {*} stringValue  - string you want to find its last character
 * @returns {String} - last character of the stringValue
 */
function getLastStringCharacter(stringValue) {
  return stringValue[stringValue.length -1];
}

module.exports = { getLastStringCharacter };
