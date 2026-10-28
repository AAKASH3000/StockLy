const mongoose= require("mongoose");

const bcrypt = require('bcryptjs');

const SignupSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Your email address is required"],
        unique:true,
    },
     username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password:{
        type:String,
        require:[true,"Your password is required"],
       
    },
});

SignupSchema.pre("save", async function(){
    this.password= await bcrypt.hash(this.password, 12);
});

module.exports= {SignupSchema};
