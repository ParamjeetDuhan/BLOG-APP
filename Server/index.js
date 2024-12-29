import express from "express";
import ConnectToMongo from "./config/db.js";
const app = express();
 const PORT = 9000;

 ConnectToMongo();

 app.get("/",(req,res)=>{
    res.send("API is Running....");
 });

app.listen(PORT,()=>{
    console.log(`API is running on ${PORT}`);
});