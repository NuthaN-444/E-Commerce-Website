const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountPrice:{
        type:Number
    },
    offer:{
        type:Number,
    },
    ratings:{
        type:Number,
    },
    url:{
        type:String,
    }
}, {timestamps:true}, )

module.exports = mongoose.model("Product",productSchema)