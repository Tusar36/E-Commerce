const mongoose = require("mongoose");

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
    minLength: 8,
  },
  address: {
    type: String,
    required: true,
  },
  image: {},
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
