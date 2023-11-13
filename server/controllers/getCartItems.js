const cart = require("../models/CartModel");
const products = require("../models/ProductModel");

const getCartItems = async (req, res) => {
  const id = req.params.id.trim(" ");

  try {
    const searchItem = await cart.find({ userID: id });

    let result = [];

    for (const e of searchItem) {
      let { name, price, discount, rating, images, category } =
        await products.findById(e.productID);
      result.push({
        product: { name, price, discount, rating, images, category },
        stock: e.stock,
      });
    }

    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = getCartItems;
