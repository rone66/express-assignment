const mongoose=require("mongoose");

const userScheme= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true, 
    },
    password:{
        type:String,
        required:true,
    }
})

const userModel=mongoose.model('user',userScheme);
module.exports=userModel;