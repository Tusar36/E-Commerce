const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    trim:true
  },
  products:[
    {
      productID:{
        type:String,
        required:true
      },
      name: {
        type: String,
        required: [true, "Enter name"],
      },
      price: {
        type: Number,
        required: [true, "Enter price"],
      },
      discount: {
        type: Number,
        required: [true, "Enter discount"],
      },
      images: [
        {
          url: {
            type: String,
            required: true,
          },
        },
      ],
      quantity:{
        type:Number,
        required:true
      }
    }
  ]
});

module.exports = mongoose.model('cart',CartSchema)