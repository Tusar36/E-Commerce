const Orders = require('../../models/Orders')

const getOrders = async (req,res) =>{
    try {
        const orders  = await Orders.find()
        res.status(200).json({
            orders
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

module.exports = getOrders