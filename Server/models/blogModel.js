import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    title :{
        type : String,
    },
    category :{
        type : mongoose.Schema.Types.ObjectId,
        refer :"categories",
    },
    description :{
        type : String,
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        refer : "users",
    },
});

const BlogModel = mongoose.model("blog",BlogSchema);

export default BlogModel;