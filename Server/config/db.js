import mongoose from "mongoose";

const ConnectToMongo = async ()=>{
    const res = await mongoose.connect("mongodb://localhost:27017/blog-mern-project");
    if(res){
        console.log("Connected successfully");
    }
}

export default ConnectToMongo;