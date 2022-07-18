const userDetails = require("../userData");

function ageLessThanTwentyone(age) {
    userDetails.map(age => {
        return  age < 21
    })
    console.log(age <21);

}

ageLessThanTwentyone()
