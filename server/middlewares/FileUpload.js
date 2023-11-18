const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'db474cgn8',
  api_key: '765438891375223',
  api_secret: 'e95b_FsLfdcammDfrWNhx9vAcgw',
});

const FileUpload = async (req, res, next) => {
  const file=req.files.image.data.toString('base64')
  try {

    const result=await cloudinary.uploader.upload(
      `data:${req.files.image.mimetype};base64,${file}`
    );
    req.imageURI=result.url
    next()
  } catch (error) {
    console.log(error)
  }
 
};

module.exports = FileUpload
