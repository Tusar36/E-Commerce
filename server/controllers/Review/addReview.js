const Products = require("../../models/ProductModel");
const User = require("../../models/UserModel");

const addReview = async (req, res) => {
  const id = req.params.id.trim("");
  try {
    const searchedProduct = await Products.findById(id);
    if (!searchedProduct) {
      return res.status(200).json({
        message: "Product not found",
      });
    }
    const CheckEmail = await User.find({ email: req.body.email });
    if (!CheckEmail) {
      return res.status(404).json({
        message: "Email dose not exists",
      });
    }
    searchedProduct.reviews.push(req.body);
    let rating = 0;
    searchedProduct.reviews.forEach((e) => {
      rating += e.rating;
    });
    await Products.updateOne(
      { _id: id },
      {
        $set: {
          reviews: searchedProduct.reviews,
          numberOfReviews: searchedProduct.numberOfReviews + 1,
          rating: rating / (searchedProduct.numberOfReviews + 1),
        },
      }
    );
    res.status(200).json({
      message: "Review added",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
    console.log(error);
  }
};

module.exports = addReview;
