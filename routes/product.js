const express = require("express");
const router = express.Router();
const protect = require("../middleWares/auth");
const {createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct

} = require("../controllers/product");
const { upload } = require("../utils/fileUpload");


router.post("/", protect,upload.single("image"),createProduct);
router.patch("/:id", protect, upload.single("image"), updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);


module.exports = router;
