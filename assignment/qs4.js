const express=require("express");
const app=express();

const PORT=3000;

app.listen(PORT,()=>{
    console.log("server is created successfully at 3000");
});

app.use('/random',(req,res)=>{
    let random=Math.floor(Math.random()*100);
    res.send({random:`${random}`});
})