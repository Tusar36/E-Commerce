const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter name"],
  },
  description: {
    type: String,
    required: [true, "Enter description"],
  },
  price: {
    type: Number,
    required: [true, "Enter price"],
  },
  discount: {
    type: Number,
    required: [true, "Enter discount"],
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
        required: [true, "Enter productId for images"],
      },
      url: {
        type: String,
        required: [true, "Enter Url for images"],
      },
    },
  ],
  reviews: [
    {
      name: {
        type: String,
        required: [true, "Enter name for review"],
      },
      email: {
        type: String,
        required: [true, "Enter name for review"],
      },
      rating: {
        type: Number,
        required: [true, "Enter rating for review"],
      },
      comment: {
        type: String,
        required: [true, "Enter comment for review"],
      },
    },
  ],
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: [true, "Enter the category"],
  },
});

module.exports = mongoose.model("Products", productSchema);
