const cloudinary = require("cloudinary").v2;
const user = require('../models/UserModel')
cloudinary.config({
  cloud_name: 'db474cgn8',
  api_key: '765438891375223',
  api_secret: 'e95b_FsLfdcammDfrWNhx9vAcgw',
});

const FileUpload = async (req, res, next) => {
  

  const checkEmail = await user.findOne({ email:req.body.email });
  const checkName = await user.findOne({ name:req.body.name });
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

  if(!req.files){
    req.imageURI=req.body.image
    next()
    return
  }
  const file=req.files.image.data.toString('base64')


  try {

    const result=await cloudinary.uploader.upload(
      `data:${req.files.image.mimetype};base64,${file}`
    );
    req.imageURI=result.url
    console.log(result.url)
    next()
  } catch (error) {
    console.log(error)
  }
 
};

module.exports = FileUpload
