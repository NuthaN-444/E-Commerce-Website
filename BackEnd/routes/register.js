const express = require('express');
const router = express.Router();
const Register = require("../models/user")
const bcrypt  = require('bcryptjs');
const  {getUser,createUser}  = require('../controllers/register');
const { updateUser,userDelete } = require('../controllers/editUserData');


router.get("/:email",getUser);

router.post("/",createUser);

router.put("/:email",updateUser);

router.delete("/:email",userDelete);
module.exports = router;