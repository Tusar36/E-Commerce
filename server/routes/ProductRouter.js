const express = require("express");

const router = express.Router();

const getAllProduct = require("../controllers/Products/getAllProduct");
const getProductDetails = require("../controllers/Products/getProductDetails");
const createProduct = require("../controllers/Products/createProduct");
const addReview = require("../controllers/Review/addReview");
const updateProduct = require("../controllers/Products/updateProduct");
const deleteProduct = require("../controllers/Products/deleteProduct");

router.get("/get", getAllProduct);
router.get("/get/:id", getProductDetails);
router.post("/create", createProduct);
router.post("/addReview/:id", addReview);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
