const e = require('express');
const Product = require("../models/product");
const Cart = require('../models/cart');



//getting all product in cart 
const getCartProductIdController = async(req,res) => {
    const email = req.params.email;
    try {
        const gettingAllProduct = await Cart.find({email:email});
        if(gettingAllProduct.length===0) {
           return res.json({message:"No product added to cart."});
        }
        return res.json({message:"Successfully Fetched.",cartProductId:gettingAllProduct});
    }catch(error) {
       return res.json({message:"Server Error"});
    }
}



// get product by id 

const getAllCardProduct = async (req, res) => {
    const email = req.params.allprodid; // actually email

    try {
        const cartItems = await Cart.find({ email: email });

        const productIds = cartItems.map(item => item.prodID);

        const products = await Product.find({
            _id: { $in: productIds }
        });

        if(products.length===0) return res.json({message:"No Cart product exists."});

        return res.json({
            message: "Successfully Fetched.",
            cartProducts: products
        });

    } catch (error) {
        return res.json({ message: "Server error" });
    }
}







// adding the product to cart
const addToCartController = async(req,res) => {
    const {_id,email} = req.body;
    try {
        const addedCart = await Cart.create({email:email,prodID:_id});
        if(!addedCart){
            return res.json({message:"Failed to add to cart."});
        }
        return res.json({message:"successfully added.",addedCart:addedCart});
    }catch(error) {
        return res.json({message:"Server Error",error:error});
    }
}

module.exports = {getCartProductIdController,getAllCardProduct,addToCartController};