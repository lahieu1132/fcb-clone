const User = require("../models/user");
const bcrypt = require("bcryptjs");

module.exports = class userService {
  static async getAllusers() {
    try {
      const allUsers = await User.find();
      return allUsers;
    } catch (error) {
      console.log(`Could not fetch users ${error}`);
    }
  }
  static async createUser(data) {
    try {
      const salt = await bcrypt.genSalt(10);
      let hashpassword = await bcrypt.hash(data.password, salt);

      const newUser = {
        email: data.email,
        password: hashpassword,
      };
      const response = await new User(newUser).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async checkEmail(email) {
    try {
      const checkEmail = await User.findOne({ email });

      return checkEmail;
    } catch (error) {
      console.log(`client not found. ${error}`);
    }
  }
};
