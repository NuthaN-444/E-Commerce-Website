const Register = require("../models/user");
const bcrypt = require('bcryptjs');



const updateUser = async(req,res) => {
    const {email} = req.params;
    const {username,password} = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        const updatingUserData = await Register.findOneAndUpdate({email},{$set : {email,hashedPassword,username}},{new:true});
    } catch (error) {
        res.status(500).json("Server Error "+error);
    }
}


module.exports = {
    updateUser
}