const userDetails = require("../userData");

/**
 * @function - to filter the objects in an array with user age less than 21
 * @returns {Array}
 */
const ageLessThanTwentyone = userDetails.filter((userDetail) => {
  return userDetail.age < 21;
});

/**
 * @function - to filter the objects in an array who are females
 * @returns {Array}
 */

const findAllFemales = userDetails.filter((userDetail) => {
  return userDetail.gender === "female";
});

/**
 * @function - to return an array with only user ages > 20
 * @returns {Array}
 */
const objectWithAgeGreaterThanTwenty = userDetails.filter((userDetail) => {
  return userDetail.age > 20;
});

module.exports = {
  ageLessThanTwentyone,
  findAllFemales,
  objectWithAgeGreaterThanTwenty,
};
