const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "db474cgn8",
  api_key: "765438891375223",
  api_secret: "e95b_FsLfdcammDfrWNhx9vAcgw",
});

const ProductImgUpload = async (req, res, next) => {
  const imagesFiles = req.files;
  const imageUrl = [];
  try {
    for (let key in imagesFiles) {
      const file = imagesFiles[key].data.toString("base64");

      const result = await cloudinary.uploader.upload(
        `data:${imagesFiles[key].mimetype};base64,${file}`
      );
      imageUrl.push(result.url);
    }
    req.image = imageUrl;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = ProductImgUpload;
