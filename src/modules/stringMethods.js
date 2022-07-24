/**
 * @function - function to find the last character of a string
 * @param {*} stringValue  - string you want to find its last character
 * @returns {String} - last character of the stringValue
 */


function getLastStringCharacter(stringValue) {
  return stringValue[stringValue.length -1];
}


/**
 * @function  - convert a text of string to an array of strings
 * @param {*} stringText 
 * @returns {Array.<String>}
 */

function convertStringToArray(stringText){
    return stringText.split(" ")
}



module.exports = { getLastStringCharacter , convertStringToArray };
