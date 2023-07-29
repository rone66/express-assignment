//const { log } = require("console");
const express=require("express");
const app=express();

const PORT=3000;

app.listen(PORT,()=>{
    console.log("server is created successfully at 3000");
})

app.get('/',async(req,res)=>{
    const data= await fetch(`https://fakestoreapi.com/products/categories`);
    const output=await data.json();
    res.send(output);
    console.log(output);
   
    
})

app.get('/men',async(req,res)=>{
    let tag="men's clothing";
    const data= await fetch(`https://fakestoreapi.com/products/category/${tag}`);
    const output=await data.json();
    let op=[];
    for (let i = 0; i <10; i++) {
        if(output[i]===undefined){
            break;
        }
        op.push(output[i])
    }; 
    res.send(op);
    console.log(output);
   
    
})

app.get('/women',async(req,res)=>{
    let tag="women's clothing";
    const data= await fetch(`https://fakestoreapi.com/products?limit=5/category/${tag}`);
    const output=await data.json();
    let op=[];
    for (let i = 0; i <10; i++) {op.push(output[i])}; 
    res.send(op);
    //console.log(output);
   
    
})

app.get('/others',(req,res)=>{
    res.status(400).send("bad request");
})