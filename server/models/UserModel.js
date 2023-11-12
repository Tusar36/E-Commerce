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
  },
  address: {
    type: String,
    required: true,
  },
  image: { url:{
    type:String,
    required:true
  } },
  role: {
    type: Number,
    default: 1,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
