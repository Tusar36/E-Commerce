const cart = require('../models/CartModel')

const addCartItems = async (req,res) =>{

    const {userID,productID,stock} = req.body

    if(!userID){
        return res.status(401).json({
            message:'UserID not provided'
        })
    }
    if(!productID){
        return res.status(401).json({
            message:'productID not provided'
        })
    }
    if(!stock){
        return res.status(401).json({
            message:'stock number not provided'
        })
    }

    try {
        await cart.create({
            userID,
            productID,
            stock
        })
        res.status(200).json({
            message:"Item added to cart"
        })
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }

}

module.exports = addCartItems