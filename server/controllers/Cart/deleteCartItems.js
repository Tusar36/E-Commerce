const cart = require("../../models/CartModel");

const deleteCartItems = async (req, res) => {
  const id = req.params.id.trim(" ");
  try {
    
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = deleteCartItems;
