const bcrypt = require("bcrypt");

const password = "123456x";
const hash = "$2b$10$1x0Q8RL.yp6GqErPIjWTTupv0OQ8aNsdQUnKvf5/9D4WPzpk1VwNa";
bcrypt.compare(password, hash, function(err, result) {
    console.log(result); // true if matched, false otherwise
});
