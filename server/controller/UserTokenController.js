const userTokenService = require("../services/userToken");
const jwt = require("jsonwebtoken");

module.exports = new (class UserTokenController {
  async getNewAccessToken(req, res) {
    const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;
    try {
      const userToken = await userTokenService.verifyRefreshToken(
        req.body.refreshToken
      );
      if (userToken) {
        const tokenDetails = jwt.verify(req.body.refreshToken, privateKey);
        const payload = { _id: tokenDetails._id, role: tokenDetails.role };
        const accessToken = jwt.sign(
          payload,
          process.env.ACCESS_TOKEN_PRIVATE_KEY,
          { expiresIn: "14m" }
        );
        res.status(200).json({
          error: false,
          accessToken,
          message: "Access token created successfully",
        });
      } else res.status(400).json({ error: "Refresh token does not exist" });
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async logout(req, res) {
    try {
      await userTokenService.deleteRefreshToken(req.body.refreshToken);
      res.status(200).json({ error: false, message: "Logged Out Sucessfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: true, message: "Internal Server Error" });
    }
  }
})();
