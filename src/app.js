const concatenate = require("./modules/concat");
const isPalindrome = require("./modules/palidrome");
const sumOfNumbers = require("./modules/arraySum");
const higherOrderFunctions = require("./modules/hof");
const sum = require("./modules/complexSum");
const stringMethods = require("./modules/stringMethods");

// console.log(concatenate());
// console.log(isPalindrome("45"));
// console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(
//   "objectWithAgeGreaterThanTwenty ::",
//   higherOrderFunctions.objectWithAgeGreaterThanTwenty
// );

// console.log(
//   "ageLessThanTwentyone::",
//   higherOrderFunctions.ageLessThanTwentyone
// );
// console.log("findAllFemales::", higherOrderFunctions.findAllFemales);

// console.log(sum(11,4));

console.log(stringMethods.getLastStringCharacter("emmanuel"));
console.log(
  stringMethods.convertStringToArray("Simple is better than complex")
);
