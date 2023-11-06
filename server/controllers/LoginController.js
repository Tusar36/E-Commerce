const user = require("../models/UserModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const LoginController = async (req, res) => {
  const { email, password } = req.body;
  const checkEmail = await user.findOne({ email });

  if (checkEmail == null) {
    return res.status(404).json({
      message: "Email does not exist",
    });
  }
  const checkPass = await bcrypt.compare(password, checkEmail.password);
  if (!checkPass) {
    return res.status(401).json({
      message: "Invalid password",
    });
  } else {
    try {
      const token = JWT.sign({ _id: checkEmail._id }, process.env.JWT_TOKEN);
      res.status(200).json({
        _id: checkEmail._id,
        name: checkEmail.name,
        email: email,
        image: checkEmail.image,
        role: checkEmail.role,
        token,
      });
    } catch (error) {
      res.json({
        error,
      });
    }
  }
};

module.exports = LoginController;
