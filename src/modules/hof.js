const userDetails = require("../userData");

/**
 * @function - to filter the objects in an array with user age less than 21
 * @returns {Array.<Object>} - returns an array of obejects
 */
const ageLessThanTwentyone = userDetails.filter((userDetail) => {
  return userDetail.age < 21;
});

/**
 * @function - to filter the objects in an array who are females
 * @returns {Array.<Object>} - returns an array of obejects
 */

const findAllFemales = userDetails.filter((userDetail) => {
  return userDetail.gender === "female";
});

/**
 * @function - to return an array with only user ages > 20
 * @returns {Array.<Object>} - returns an array of obejects
 */
const objectWithAgeGreaterThanTwenty = userDetails.filter((userDetail) => {
  return userDetail.age > 20;
});

module.exports = {
  ageLessThanTwentyone,
  findAllFemales,
  objectWithAgeGreaterThanTwenty,
};
