const OrdersModel = require('../../models/Orders')

const getUserOrders = async(req,res) =>{
    const userID = req.params.id
    try {
        const orders = await OrdersModel.find({userID})
        res.status(200).json({
            orders
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
    
}

module.exports = getUserOrders