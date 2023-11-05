const product = require("../models/ProductModel");

const getAllProduct = async (req, res) => {
  const products = await product.find();
  res.status(200).json({
    products,
  });
};

module.exports = getAllProduct;
