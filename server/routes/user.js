const express = require("express");
const router = express.Router();

const UserController = require("../controller/UserController");

router.get("/info", UserController.apiGetclientById);
router.post("/login", UserController.apiCheckUser);
router.post("/register", UserController.apiCreateUser);
router.post("/check", UserController.apiCheckEmail);
router.get("/", UserController.apiGetAllUsers);

module.exports = router;
