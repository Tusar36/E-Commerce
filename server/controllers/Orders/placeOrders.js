const OrdersModel = require("../../models/Orders");
const ProductModel = require("../../models/ProductModel");
const placeOrders = async (req, res) => {

  const { userID, products } = req.body;
  
  try {
    const result = [];
    let totalAmount = 0
    for (let i = 0; i < products.length; i++) {
        const {name,price,discount} = await ProductModel.findById(products[i].id)
        let amount = (discount/100)*price
        result.push({
            product:{
                name,
                price,
                discount
            },
            amount,
            quantity:products[i].quantity
        })
        totalAmount+=amount*products[i].quantity
    }
    await OrdersModel.create({
        userID,
        orders:result,
        totalAmount,
        status:'Pending'
    })
    res.status(200).json({
        message:"Order Placed"
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
        error
    })
  }
};

module.exports = placeOrders;
