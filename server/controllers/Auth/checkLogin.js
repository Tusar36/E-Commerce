const user = require("../../models/UserModel");
const checkLogin = async (req, res) => {
  const id = req.userID._id.trim(" ");
  try {
    const { name, email, address, image, role } = await user.findById(id);
    res.status(200).json({
      name,
      email,
      address,
      image,
      isAdmin:(role==0)?true:false,
      isLogined: true,
    });
  } catch (error) {
    res.status(500).
      json({
        error,
      });
  }
};

module.exports = checkLogin;
