const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    orderID:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    },
    timeStamp:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('payments',PaymentSchema)