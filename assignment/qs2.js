const express=require("express");
const app=express();

const PORT=3000;

app.listen(PORT,()=>{
    console.log("server is created successfully at 3000");
})
let counter;

app.get('/',(req,res)=>{
    counter=0;
    res.send({counter:`${counter}`})
});

app.get('/increment',(req,res)=>{
    counter++;
    res.send({counter:`${counter}`})
});

app.get('/decrement',(req,res)=>{
    counter--;
    res.send({counter:`${counter}`})
});