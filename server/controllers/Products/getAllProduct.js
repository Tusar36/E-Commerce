const product = require("../../models/ProductModel");
const ApiFeatures = require('../../utils/Features')

const getAllProduct = async (req, res) => {
  const result = await product.find()
  const products = new ApiFeatures(result,req.query);
  res.status(200).json({
    products:products.features(),
    available:result.length,
    total:products.features().length
  });
};

module.exports = getAllProduct;
