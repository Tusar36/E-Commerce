const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  stars: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      productId: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  numberOfReviews: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Products", productSchema);
