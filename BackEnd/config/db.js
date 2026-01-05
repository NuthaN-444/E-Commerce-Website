const mongoose = require('mongoose');


const connectDB = async () => {
    console.log("URL from .env",process.env.MONGODB_URL);
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/Ecommerce`);
        console.log("DB CONNECTED");
    } catch(error) {
        console.log("MONGOOSE CONNECTION ERROR ",error);
    }
}

module.exports = connectDB;