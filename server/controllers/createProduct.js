const product = require("../models/ProductModel");

const createProduct = async (req, res) => {
  try {
    await product.create(req.body);
    res.status(200).json({
      message: "Product created",
      details: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = createProduct;
