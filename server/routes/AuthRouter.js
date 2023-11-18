const express = require("express");

const router = express.Router();
const RegisterController = require("../controllers/Auth/RegisterController");
const LoginController = require("../controllers/Auth/LoginController");
const checkLogin = require("../controllers/Auth/checkLogin");
const jwtVerifier = require("../middlewares/jwtVerifier");
const FileUpload = require("../middlewares/FileUpload");

router.post("/register",FileUpload, RegisterController);
router.post("/login", LoginController);
router.get("/checkLogin",jwtVerifier, checkLogin);

module.exports = router;
