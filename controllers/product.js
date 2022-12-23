const asyncHandler = require("express-async-handler");
const Product = require("../models/product");

// Create Product
const createProduct = asyncHandler(async (req, res) => {

   res.status(200).json({message:"Create product success"})
  });
  


  module.exports = {
    createProduct
  
  };