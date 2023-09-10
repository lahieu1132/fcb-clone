const express = require("express");
const router = express.Router();

const UserController = require("../controller/UserController");

router.post("/login", UserController.apiCheckUser);
router.post("/register", UserController.apiCreateUser);
router.get("/", UserController.apiGetAllUsers);

module.exports = router;
