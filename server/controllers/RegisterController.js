const user = require("../models/UserModel");
const RegisterController = async (req, res) => {
  const { email, name, password, address } = req.body;

  user.create({
    name,
    password,
    email,
    address,
  });
};

module.exports = RegisterController;
