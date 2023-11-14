const Products = require("../../models/ProductModel");

const getProductDetails = async (req, res) => {
  const id = req.params.id.trim(" ");
  try {
    const findProduct = await Products.findById(id);
    if (!findProduct) {
      return res.status(404).json({
        message: "product not found",
      });
    }
    res.status(200).json({
      findProduct,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = getProductDetails;
