const cart = require("../../models/CartModel");

const deleteCartItems = async (req, res) => {
  const {userID,itemID} = req.body
  try {
    let {products} = await cart.findOne({userID})
    if(!products){
      return res.status(404).json({
        message:"Product  not found in the cart"
      })
    }
    let result = []
    for(let i=0;i<products.length;i++){
      if(products[i]._id!=itemID){
        result.push(products[i])
      }
    }
    
    await cart.findOneAndUpdate({userID},{
      $set:{
        products:result
      }
    })
    res.status(200).json({
      message:"Product Deleted"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error,
    });
  }
};

module.exports = deleteCartItems;
