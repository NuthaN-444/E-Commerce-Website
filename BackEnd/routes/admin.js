const express = require("express");
const router = express.Router();
const {addProduct,updateProduct,deleteProduct} = require("../controllers/product");


router.post("/",addProduct);


router.put("/",updateProduct);


router.delete("/",deleteProduct);

module.exports = router;