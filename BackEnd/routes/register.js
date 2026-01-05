const express = require('express');
const  {getUser,createUser}  = require('../controllers/register');
const router = express.Router();
const Register = require("../models/user")
const bcrypt  = require('bcryptjs');

router.get("/:email",getUser);


router.post("/",createUser);


module.exports = router;