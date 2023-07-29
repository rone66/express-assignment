const express=require("express");
const app=express();

const PORT=3000;

app.listen(PORT,()=>{
    console.log("server is created successfully at 3000");
});

app.get('/',(req,res)=>{
    res.send({msg:`I am homepage`})
})

app.get('/about',(req,res)=>{
    res.send({msg:`I am about page`})
})

app.get('/contact',(req,res)=>{
    res.send({msg:`support@pwskills.com`})
})