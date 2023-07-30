const express=require("express");
const app= express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;

const dbConnect=require("./config/database");
dbConnect();

app.use(express.json());

const route=require("./route/userRoute");
app.use('/api/v1',route);




app.listen(PORT,()=>{
    console.log(`server is successfully created at ${PORT}`);
})


