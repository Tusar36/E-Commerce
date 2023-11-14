const cart = require("../../models/CartModel");
const products = require("../../models/ProductModel");

const getCartItems = async (req, res) => {
  const id = req.params.id.trim(" ");

  try {
    const searchItem = await cart.find({ userID: id });
    if(!searchItem){
      return res.status(404).json({
        message:"Cart for user not found"
      })
    }
    res.status(200).json({
      result:searchItem
    })
    
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = getCartItems;
