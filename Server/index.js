import express from "express";
import ConnectToMongo from "./config/db.js";
import authRoutes from "./routes/blog.js"

const app = express();
 const PORT = 9000;

 ConnectToMongo();

 app.get("/",(req,res)=>{
    res.send("API is Running....");
 });
// api routes
 app.use("/api/v1",authRoutes);

app.listen(PORT,()=>{
    console.log(`API is running on ${PORT}`);
});