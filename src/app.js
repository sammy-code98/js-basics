const concatenate = require("./modules/concat");
const isPalindrome = require("./modules/palidrome");
const sumOfNumbers = require("./modules/arraySum");
const higherOrderFunctions = require("./modules/hof");

// console.log(concatenate());
// console.log(isPalindrome("45"));
// console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(
  "objectWithAgeGreaterThanTwenty ::",
  higherOrderFunctions.objectWithAgeGreaterThanTwenty
);

console.log(
  "ageLessThanTwentyone::",
  higherOrderFunctions.ageLessThanTwentyone
);
console.log("findAllFemales::", higherOrderFunctions.findAllFemales);
