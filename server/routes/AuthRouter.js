const express = require("express");

const router = express.Router();
const RegisterController = require("../controllers/RegisterController");
const LoginController = require("../controllers/LoginController");
const checkLogin = require("../controllers/checkLogin");
const jwtVerifier = require("../middlewares/jwtVerifier");

router.post("/register", RegisterController);
router.post("/login", LoginController);
router.get("/checkLogin",jwtVerifier, checkLogin);

module.exports = router;
