const {SignupModel} = require("../models/SignupModel");

const {createSecretToken} = require('../util/SecretToken');

const bcrypt = require("bcryptjs");

// module.exports.SignUp = async (req,res,next)=>{
//     try{
//         const{email,password,username}= req.body;
//         const existingUser = await SignupModel.findOne({email});
//         if(existingUser){
//             return res.json({ message: "User already exists" });
//         }
//         const user = await SignupModel.create({email,password,username});
//         const token = createSecretToken(user._id);

//         res.cookie("token", token, {
//             withCredentials: true,
//             httpOnly: false,
//         });
//          res
//             .status(201)
//             .json({ message: "User signed in successfully", success: true, user });
//         next();
//     }catch (error) {
//         console.error(error);
//     }
// }

module.exports.SignUp = async (req, res, next) => {
  try {
    const { email, password, username} = req.body || {};
    if(!email || !password || !username){
      return res.status(400).json({
        success:false,
        message:"Email, password, and username are required",
      })
    }
    const existingUser = await SignupModel.findOne({ email });
    // if (existingUser) {
    //   return res.json({ message: "User already exists" });
    // }
    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    const user = await SignupModel.create({ email, password, username});
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    // res
    //   .status(201)
    //   .json({ message: "User signed in successfully", success: true, user });
     res.status(201).json({ message: "User signed in successfully", success: true, token });
    next();
  } catch (error) {
    console.error(error);
  }
};

// module.exports.Login = async (req,res,next) => {
//     try{
//       const {email,password}=req.body;
//       if(!email || !password){
//         return res.json({message:"All fields are required"});
//       }
//       const user = await SignupModel.findOne({email});

//       if(!user){
//         return res.json({message:"Incorrect password or email"});
//       }

//       const auth = await bcrypt.compare(password,user.password);
//       if(!auth){
//         return res.json({message:"Incorrect password or email"});
//       }

//       const token = createSecretToken(user._id);
//       res.cookie("token", token,{
//         withCredentials:true,
//         httpOnly: false,
//       })
//       res.status(201).json({message:"User logged in successfully", success: true});
//       next();
//     }catch(e){
//         console.log(e);
//     }
// }


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await SignupModel.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     // res.status(201).json({ message: "User logged in successfully", success: true });
     res.status(201).json({ message: "User signed in successfully", success: true, token });
     next()
  } catch (error) {
    console.error(error);
  }
}
