/**
 * @function - function to find the last character of a string
 * @param {String} -stringValue : string you want to find its last character
 * @returns {String} - last character of the stringValue
 */


function getLastStringCharacter(stringValue) {
  return stringValue[stringValue.length -1];
}


/**
 * @function  - convert a text of string to an array of strings
 * @param {String} -stringText 
 * @returns {Array.<String>}
 */

function convertStringToArray(stringText){
    return stringText.split(" ")
}



/**
 * @function - reverses a givien input
 * @param {String} -stringData  : string text to be reversed
 * @returns  {String}
 */

function reverseString(stringData){
    // const splitData = stringData.split("")
    // const reverseData = splitData.reverse()
    // const joinData = reverseData.join("")

    // return joinData
    return stringData.split("").reverse("").join("")

}



/**
 * @function - checks if a letter is a vowel or not
 * @param {String} - a letter to check if its a vowel or not
 * @returns {Boolean}
 */

function checkVowel(val){
    if(val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u'){
        return true
    }
    return false
}



module.exports = { getLastStringCharacter , convertStringToArray, reverseString, checkVowel };
