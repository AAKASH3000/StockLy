const { SignUp,Login } = require("../Controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
// const express = require("express");
// const router = express.Router();
const router = require("express").Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/",userVerification);

module.exports = router;







