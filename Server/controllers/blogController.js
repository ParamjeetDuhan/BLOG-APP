import BlogModel from "../models/blogModel.js";

class BlogController {
  // Fetch all blogs by the logged-in user
  static getAllBlogs = async (req, res) => {
    try {
      const fetchAllBlogs = await BlogModel.find({ user: req.user._id });
      return res.status(200).json(fetchAllBlogs);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  // Add a new blog
  static addNewBlogs = async (req, res) => {
    const { title, category, description } = req.body;
    try {
      if (title && category && description) {
        if (!req.file) {
          return res.status(400).json({ message: "Thumbnail image is required" });
        }

        const addBlog = new BlogModel({
          title: title,
          description: description,
          category: category,
          thumbnail: req.file.filename,
          user: req.user._id,
        });

        const savedBlog = await addBlog.save();
        if (savedBlog) {
          return res.status(200).json({ message: "Blog Saved Successfully" });
        }
      } else {
        return res.status(400).json({ message: "All fields are required" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  

  // Fetch a single blog by ID
  static getSingleBlogs = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const fetchBlogsById = await BlogModel.findById(id);
        if (!fetchBlogsById) {
          return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json(fetchBlogsById);
      } else {
        return res.status(400).json({ message: "Invalid URL" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default BlogController;
