const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: { imageSchema },
  role: {
    type: Number,
    default: 1,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
