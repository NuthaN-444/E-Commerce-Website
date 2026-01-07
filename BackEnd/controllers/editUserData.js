const User = require("../models/user");
const bcrypt = require('bcryptjs');



const updateUser = async(req,res) => {
    const {email} = req.params;
    const {username,password} = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        const updatingUserData = await User.findOneAndUpdate({email},{$set : {email,password:hashedPassword,username}},{new:true});
    } catch (error) {
        res.status(500).json("Server Error "+error);
    }
}


const userDelete = async(req,res) => {
    const {email} = req.params;
    try {
        await User.findOneAndDelete({email});
    } catch (error){
        res.status(500).json("server error "+error);
    }
}

module.exports = {
    updateUser,
    userDelete
}