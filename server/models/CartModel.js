const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    trim:true
  },
  productID: {
    type: String,
    required: true,
    trim:true
  },
  stock:{
    type:Number,
    required:true
  }
});

module.exports = mongoose.model('cart',CartSchema)