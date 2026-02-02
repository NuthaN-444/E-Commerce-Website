const { Router } = require("express");
const Product = require("../models/product");




//adding product
const addProduct = async(req,res) => {
    let {productName,productDescription,category,price,discountPrice,offer,ratings,url} = req.body;
    price = Number(price);
    discountPrice = Number(discountPrice);
    offer = Number(offer);
    ratings = Number(ratings);
    try {
        const addingProductData = await Product.create({productName,productDescription,category,price,discountPrice,offer,ratings,url});
        res.json("successfully created.",addingProductData);
    } catch (error){
        res.json("Failed to add the product ! "+error);
    }
}




//updating product
const updateProduct = async(req,res) => {
    let {_id,productName,productDescription,category,price,discountPrice,offer,ratings,url} = req.body;
    price = Number(price);
    discountPrice = Number(discountPrice);
    offer = Number(offer);
    ratings = Number(ratings);
    try {
        const udpateProduct = await Product.findOneAndUpdate({_id},{$set : {productName,productDescription,category,price,discountPrice,offer,ratings,url}},{new:true})
        res.json("successfully updated.").status(200);
    } catch (error) {
        res.json("Failed to update the product details ! ",error).status(500);
    }
}




//Deleting Product
const deleteProduct = async(req,res) => {
    const {_id} = req.body;
    try {
        const deletingProduct = await Product.findOneAndDelete({_id});
        res.json("Successfully Deleted.").status(200);
    } catch (error) {
        res.json("Failed to delete the product ! "+error).status(500);
    }
}




module.exports = {addProduct,updateProduct,deleteProduct}
