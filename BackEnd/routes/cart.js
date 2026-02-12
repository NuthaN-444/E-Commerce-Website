const express = require('express');
const router = express.Router();
const {addToCartController,getCartProductIdController,getAllCardProduct} = require("../controllers/addToCart");


router.get("/:email",getCartProductIdController);


router.get("/allcartproduct/:allprodid",getAllCardProduct);


router.post("/",addToCartController);


module.exports = router;