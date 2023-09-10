const bcrypt = require("bcryptjs");
const userService = require("../services/user");
const signinValidation = require("../validation/signin");
const signupValidation = require("../validation/signup");
const generateTokens = require("../utils/generateTokens");

class UserController {
  async apiGetAllUsers(req, res, next) {
    try {
      const users = await userService.getAllusers();
      if (!users) {
        res.status(404).json("There are no user found yet!");
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  //  async apiGetclientById(req, res, next) {
  //   try {
  //     let id = req.params.id || {};
  //     const client = await clientService.getclientbyId(id);
  //     res.json(client);
  //   } catch (error) {
  //     res.status(500).json({ error: error });
  //   }
  // }

  async apiCheckUser(req, res, next) {
    const { errors, isValid } = signinValidation(req.body);
    if (!isValid) return res.status(400).json(errors);

    try {
      const client = await userService.checkEmail(req.body.email);
      const validPassword = await bcrypt.compare(
        req.body.password,
        client.password
      );
      if (validPassword) {
        console.log("first");
        const { accessToken, refreshToken } = await generateTokens(client);
        res.status(200).json({
          error: false,
          accessToken,
          refreshToken,
          message: "Logged in sucessfully",
        });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  async apiCreateUser(req, res, next) {
    const { errors, isValid } = signupValidation(req.body);
    if (!isValid) return res.status(400).json(errors);
    try {
      const userCheck = await userService.checkEmail(req.body.email);
      if (userCheck) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      }

      const user = await userService.createUser(req.body);
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        res.status(201).json(user);
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

module.exports = new UserController();
