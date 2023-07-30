const User=require("../model/userSchema");
const bcrypt=require("bcrypt");
const emailValidator=require("email-validator");
const jsonwebtoken=require("jsonwebtoken");
require("dotenv").config();

exports.register= async(req,res)=>{
    try {
    const {name,email,password}=req.body;
    const validEmail=emailValidator.validate(email);
    if (!validEmail) {
        return res.status(401).json({
            success:false,
            message:"please check your email address"
        })
    }
    //console.log(password);
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password,10);
        //console.log(hashedPassword);    
    } 
    catch(error) {
        return res.status(400).json({
            success:false,
            message:"problem in hashing in password"
        })
    }
    const user=await User.create({
        name,email,password:hashedPassword
    })
    return res.status(200).json({
        success:true,
        message:"User registered successfully "
    })
    } 
    catch(error) {
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}


exports.Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if (!email || !password) {
            return res.status(404).json({
                success:false,
                message:"Any of the creadential is empty"
            })
            
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success:false,
                message:"please do register yourself"
            })
        }
        const payload={
            email:user.email,
            id:user._id
        }
        if(await bcrypt.compare(password,user.password)){
            let token=jsonwebtoken.sign(payload,process.env.SECRET,
                {expiresIn:"2h"});
            user.password=undefined;
            user[token]=token;
            const cookieOptions={
                expires:new Date(Date.now()+3*24*60*10000),
                httpOnly:true
            }
            res.cookie("token",token,cookieOptions).status(200).json({
                success:true,
                message:"User login successfully",
                
            })
            console.log(user);
        }
    } 
    catch(error) {
        return res.status(405).json({
            success:false,
            message:error.message,
        })
    }
}