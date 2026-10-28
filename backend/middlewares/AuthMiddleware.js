const {SignupModel} = require("../models/SignupModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  try{
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
      return res.json({ status: false })
      } else {
        const user = await SignupModel.findById(data.id)
        if (user) return res.json({ status: true, user: user.username })
        else return res.json({ status: false })
      }
  })
  }catch(e){
    console.error(e);
    res.status(401).json({status: false});
  }
}