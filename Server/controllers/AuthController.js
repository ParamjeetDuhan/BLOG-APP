import AuthModel from "../models/authModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

class AuthController {
    static userRegistration = async (req,res) =>{ 
       const {username,email,password} =req.body;
       try{
              if(username&&email&&password){
                const isUser = await AuthModel.findOne({email: email});
                if(!isUser){
                            //passwoed hasing
                            const genSalt =await bcryptjs.genSalt(10);
                            const hashedpassword = await bcryptjs.hash(password ,genSalt);
                            // save a user
                            const newUser = AuthModel({
                                username,
                                email,
                                password: hashedpassword,
                            });

                            const saveUser = await newUser.save();
                            if(saveUser){
                                return res.status(200).json({ message : "User Registration Successfull"});
                            }
                }
                else{
                    return res.status(400).json({ message : "Email Already exists"});
                }
              }
              else{
                return res.status(400).json({ message : "all fields are required"});
              }
       }catch(error){
        return res.status(400).json({message: error.message});
       }
    };
    static userLogin = async (req,res) =>{ 
       const {email,password} = req.body;
       try{
               if(email&&password){
                       const isEmail = await AuthModel.findOne({ email :email});
                       if(isEmail){
                            if(isEmail.email===email && await bcryptjs.compare(password, isEmail.password)){
                                // Generate Token
                                const token = jwt.sign({ userID : isEmail._id}, "Please Subscribe",{
                                    expiresIn : "2d",
                                });

                                return res.status(200).json({
                                    message : "Login Successfully",
                                    token,
                                    name : isEmail.username,
                                });
                            }
                            else{
                                return res.status(400).json({ message : "Wrong credential"});
                            }
                       }
                       else{
                        return res.status(400).json({ message : "Email is not found"});
                       }
               }
               else{
                return res.status(400).json({ message : "all fields are required"});
               }
       }catch(error){
        return res.status(400).json({message: error.message});
       }
    };
}

export default AuthController;