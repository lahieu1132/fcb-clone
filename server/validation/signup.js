const { isLength, isEmpty, isEmail } = require("validator");
const empty = require("../utils/isEmpty");

module.exports = signupValidation = ({ email, password }) => {
  let errors = {};

  email = !empty(email) ? email : "";
  password = !empty(password) ? password : "";

  if (isEmpty(email)) errors.email = "Email field is required";

  if (!isEmail(email)) errors.email = "Email is invalid";

  if (isEmpty(password)) errors.password = "Password field is required";

  if (!isLength(password, { min: 6, max: 30 }))
    errors.password = "Password must be at least 6 characters";

  return {
    errors,
    isValid: empty(errors),
  };
};
