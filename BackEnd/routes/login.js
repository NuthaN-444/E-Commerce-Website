const { userLoginController } = require("../controllers/login");
const User = require("../models/user");
const express = require("express");
const router = express.Router();



router.post("/",userLoginController);


module.exports = router;