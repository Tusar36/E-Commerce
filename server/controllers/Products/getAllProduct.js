const product = require("../../models/ProductModel");
const ApiFeatures = require('../../utils/Features')

const getAllProduct = async (req, res) => {
  const result = await product.find()
  try {
    const products = new ApiFeatures(result,req.query);
    res.status(200).json({
      products:products.features(),
      available:result.length,
      total:products.features().length
    });
  } catch (error) {
    res.status(500).json({
      message:error
    })
  }

};

module.exports = getAllProduct;
