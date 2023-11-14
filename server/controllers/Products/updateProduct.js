const product = require("../../models/ProductModel");

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const findProduct = await product.findById(id);
  if (!findProduct) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  try {
    await product.updateOne(
      { _id: id },
      {
        $set:req.body,
      }
    );
    res.status(200).json({
        message:"Product update"
    })
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = updateProduct;
