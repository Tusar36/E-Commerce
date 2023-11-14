const OrderModel = require('../../models/Orders')


const updateOrder = async(req,res) =>{
    const {id,status} = req.body
    try {
        await OrderModel.findByIdAndUpdate(id,{$set:{
            status:(status)?"Success":"Failed"
        }})
        res.status(200).json({
            message:"Order Updated"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
    
}

module.exports = updateOrder