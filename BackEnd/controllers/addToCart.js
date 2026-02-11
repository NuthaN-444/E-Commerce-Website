const Cart = require('../models/cart');



// adding the product to cart
const addToCartController = async(req,res) => {
    const {_id,email} = req.body;
    try {
        const addedCart = await Cart.create({email:email,prodID:_id});
        if(!addedCart){
            res.json({message:"Failed to add to cart."});
        }
        res.json({message:"successfully added.",addedCart:addedCart});
    }catch(error) {
        res.json({message:"Server Error",error:error});
    }
}

module.exports = {addToCartController};