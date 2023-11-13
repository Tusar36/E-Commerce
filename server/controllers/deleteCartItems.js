const cart = require("../models/CartModel");

const deleteCartItems = async (req, res) => {
  const id = req.params.id.trim(" ");
  try {
    const search = await cart.findOneAndDelete({ _id: id });
    res.status(200).json({
      message: "Item deleted from your cart",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = deleteCartItems;
