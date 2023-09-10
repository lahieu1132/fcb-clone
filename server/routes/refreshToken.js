const express = require("express");
const router = express.Router();

const UserTokenController = require("../controller/UserTokenController");

router.post("/", UserTokenController.getNewAccessToken);
router.delete("/", UserTokenController.logout);

module.exports = router;
