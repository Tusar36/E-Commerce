const express = require("express");

const router = express.Router();

const getAllProduct = require("../controllers/getAllProduct");
const getProductDetails = require("../controllers/getProductDetails");
const createProduct = require("../controllers/createProduct");
const addReview = require("../controllers/addReview");
const updateProduct = require("../controllers/updateProduct");

router.get("/all", getAllProduct);
router.get("/get/:id", getProductDetails);
router.post("/create", createProduct);
router.post("/addReview/:id", addReview);
router.post("/update/:id", updateProduct);

module.exports = router;
