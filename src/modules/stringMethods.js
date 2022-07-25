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



/**
 * @function - reverses a givien input
 * @param {*} stringData  - string text to be reversed
 * @returns  {String}
 */

function reverseString(stringData){
    const splitData = stringData.split("")
    const reverseData = splitData.reverse()
    const joinData = reverseData.join("")

    return joinData

}



/**
 * @function - checks if a letter is a vowel or not
 * @param {*} val 
 * @returns {Boolean}
 */

function checkVowel(val){
    if(val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u'){
        return true
    }else{
        return false
    }
}



module.exports = { getLastStringCharacter , convertStringToArray, reverseString, checkVowel };
