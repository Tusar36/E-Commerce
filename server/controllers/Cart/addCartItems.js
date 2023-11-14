const cart = require("../../models/CartModel");
const product = require("../../models/ProductModel");

const addCartItems = async (req, res) => {
    
  const { userID, productID, quantity } = req.body;

  if (!userID) {
    return res.status(401).json({
      message: "UserID not provided",
    });
  }
  if (!productID) {
    return res.status(401).json({
      message: "productID not provided",
    });
  }
  if (!quantity) {
    return res.status(401).json({
      message: "quantity number not provided",
    });
  }

  try {
    const searchCart = await cart.findOne({ userID });

    if (!searchCart) {

      const searchProduct = await product.findById(productID);

      if (!searchProduct) {
        return res.status(404).json({
          message: "product not found",
        });
      }

      await cart.create({
        userID,
        products: [
          {
            productID: searchProduct._id,
            name:searchProduct.name,
            price:searchProduct.price,
            discount:searchProduct.discount,
            images:searchProduct.images,
            quantity
          },
        ],
      });

    }else{
        let tempCart = searchCart.products
        const searchProduct = await product.findById(productID);

        if (!searchProduct) {
            return res.status(404).json({
              message: "product not found",
            });
        }

        tempCart.push({
            id: searchProduct._id,
            name:searchProduct.name,
            price:searchProduct.price,
            discount:searchProduct.discount,
            images:searchProduct.images,
            quantity
        })

        await cart.findOneAndUpdate(
            { userID },
            {$set:{
                products:tempCart.reverse()
            }}
        )

    }
    res.status(200).json({
      message: "Item added to cart",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = addCartItems;
