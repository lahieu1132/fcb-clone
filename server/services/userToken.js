const UserToken = require("../models/userToken");

module.exports = new (class userTokenService {
  async verifyRefreshToken(token) {
    try {
      const userToken = await UserToken.findOne({ token });
      return userToken;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteRefreshToken(token) {
    try {
      const userToken = await UserToken.findOneAndDelete({ token });
      console.log(userToken);
      return userToken;
    } catch (error) {
      console.log(error);
    }
  }
})();
