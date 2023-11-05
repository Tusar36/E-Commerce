const express = require("express");

const router = express.Router();

const getAllProduct = require("../controllers/getAllProduct");
const createProduct = require("../controllers/createProduct");

router.get("/get/all", getAllProduct);
router.post("/create");

module.exports = router;
