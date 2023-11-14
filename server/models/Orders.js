const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    products:[
        {
            product:{
                name:{
                    type:String,
                    required:true
                },
                price:{
                    type:Number,
                    required:true
                },
                discount:{
                    type:Number,
                    required:true
                }
            },
            amount:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
        }
    ],
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
}) 

module.exports = mongoose.model('orders',OrderSchema)