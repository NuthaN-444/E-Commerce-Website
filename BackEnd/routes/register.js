const express = require('express');
const router = express.Router();
const Register = require("../models/user")
const bcrypt  = require('bcryptjs');
const  {getUser,createUser}  = require('../controllers/register');
const { updateUser } = require('../controllers/editUserData');


router.get("/:email",getUser);

router.post("/",createUser);

router.put("/:email",updateUser);


module.exports = router;