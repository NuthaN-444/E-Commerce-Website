const express = require('express');
const router = express.Router();
const {addToCartController} = require("../controllers/addToCart");


router.post("/",addToCartController);


module.exports = router;