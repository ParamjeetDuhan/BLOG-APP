import BlogModel from "../models/blogModel.js";

class BlogController {
    static getAllBlogs = async (req,res)=>{
           try{
            const fetchAllBlogs = await BlogModel.find({});
            return res.status(200).json(fetchAllBlogs);
           }catch(error){
            return req.status(400).json({ message : error.message});
           }
    }
    static addNewBlogs = async (req,res)=>{
        const {title, category, description } = req.body;
        try{
                if(title&&category&&description){
                        const addBlog = new BlogModel({
                            title: title,
                            description: description,
                            category: category,
                            thumbnail: req.file.filename,
                        })
                }else{
                    return res.status(400).json({message: "all fields are required"});
                }
        }catch(error){
            return res.status(400).json({message: error.message});
        }
    }
    static getSingleBlogs = async (req,res)=>{
        res.send("single new blog");
    }
}

export default BlogController;