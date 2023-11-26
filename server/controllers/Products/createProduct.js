const product = require("../../models/ProductModel");

const createProduct = async (req, res) => {
  try {
    const urls = [];
    for (let i = 0; i < req.image.length; i++) {
      urls.push({ url: req.image[i] });
    }
    await product.create({
      ...req.body,
      images: urls.reverse(),
    });
    res.status(200).json({
      message: "Product created",
      details: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
    console.log(error);
  }
};

module.exports = createProduct;
