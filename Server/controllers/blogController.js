import BlogModel from "../models/blogModel.js";

class BlogController {
    static getAllBlogs = async (req,res)=>{
           try{
            const fetchAllBlogs = await BlogModel.find({user : req.user._id});
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
                            user: req.user._id,
                        });
                        const savedBlog= await   addBlog.save();
                        if(savedBlog){
                            return res.status(200).json({message: "Blog Saved Succesfully"});
                        }
                }else{
                    return res.status(400).json({message: "all fields are required"});
                }
        }catch(error){
            return res.status(400).json({message: error.message});
        }
    }
    static getSingleBlogs = async (req,res)=>{
       const id = req.params;
       try {
        if(id){
                  const fetchBlogsById = await BlogModel.findById(id);
                  return res.status(200).json(fetchBlogsById);
        }
        else{
            return res.status(400).json({message: "invalid url"});
        }
       } catch (error) {
        return res.status(400).json({message: error.message});
       }
    }
}

export default BlogController;