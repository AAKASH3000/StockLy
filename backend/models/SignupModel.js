const {SignupSchema} = require("../schema/SignupSchema.js");

const mongoose = require("mongoose");

const SignupModel = new mongoose.model("Signup", SignupSchema);

module.exports = {SignupModel};