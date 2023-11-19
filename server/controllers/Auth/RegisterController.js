const user = require("../../models/UserModel");
const bcrypt = require("bcrypt");


const RegisterController = async (req, res) => {

  const { email, name, password, address } = req.body

  const checkEmail = await user.findOne({ email });
  const checkName = await user.findOne({ name });
  if (checkEmail != null) {
    return res.status(400).json({
      message: "Email alredy exists",
    });
  }
  if (checkName != null) {
    return res.status(400).json({
      message: "Name alredy exists",
    });
  }
  try {
    const salt = 10;
    const hashedPass = await bcrypt.hash(password, salt);
    await user.create({
      name,
      password: hashedPass,
      email,
      address,
      image:{url:req.imageURI},
    });

    res.status(200).json({
      message: "User Registred!",
    });
    
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = RegisterController;
