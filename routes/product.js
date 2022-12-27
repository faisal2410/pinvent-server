const express = require("express");
const router = express.Router();
const protect = require("../middleWares/auth");
const {createProduct} = require("../controllers/product");
const { upload } = require("../utils/fileUpload");


router.post("/", protect,upload.single("image"),createProduct);


module.exports = router;
