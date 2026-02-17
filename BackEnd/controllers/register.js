const USER = require("../models/user");
const bcrypt = require('bcryptjs');


const getUser = async (req,res) => {
    const {_id} = req.params;
    try {
        const userData = await USER.findOne({_id:_id});
        if(!userData) return res.status(404).json({status:false,message:"Not Found"});
        return res.json({userData});
    } catch (error) {
        return res.status(500).json({status:false,message:"server error"});
    }
}


const createUser = async (req,res) => {
    const {email,password,username} = req.body;
    if(!email || !password || !username) {
        return res.status(400).json({status:false,message:"All fields are must filled and send."});
    }
    try{
        const isAccExist = await USER.findOne({email});

        if(isAccExist) {
            return res.status(400).json({status:false,message:"User with this email already exist."});
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        const userCreated = await USER.create({email,password:hashedPassword,username});
        return res.status(201).json({status:true,message:"successfully registered",user:userCreated});
    } catch (error) {
        return res.status(500).json({status:false,message:"Failed to register try again ! "});
    }
}


module.exports = {
    getUser,
    createUser
}