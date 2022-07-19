const userDetails = require("../userData");

/**
 * @function - to filter the objects in an array with user age less than 21
 * @returns {Array}
 */
const ageLessThanTwentyone = userDetails.filter(userDetail =>{
   return  userDetail.age < 21
})

console.log(ageLessThanTwentyone);
