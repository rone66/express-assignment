const express=require("express");
const route=express.Router();
const {register,Login}=require("../controller/authController");

route.post("/register",register);
route.post("/login",Login);


module.exports=route;