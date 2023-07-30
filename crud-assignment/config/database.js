const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=async()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then((conn)=>{
        console.log("database connection is established successfully");
        console.log(conn.connection.host);
    }).catch((err)=>{
        console.log("somting problem in db connection",err.masseage);
    })

}
module.exports=dbConnect;