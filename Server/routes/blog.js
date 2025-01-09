import express from "express";
import categoryController from "../controllers/categoryController.js";
import BlogController from "../controllers/blogController.js";
import AuthController from "../controllers/AuthController.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null ,`public/upload/`);
    },
    filename : function(req,file,cb){
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage});

 const router = express.Router();

router.post("/user/register",AuthController.userRegistration);
router.post("/user/login",AuthController.userLogin);



// Protected Route

router.get("/get/allblogs",BlogController.getAllBlogs);
router.post("/add/blog", upload.single("thumbnail"), BlogController.addNewBlogs);
router.get("/get/blogs/:id",BlogController.getSingleBlogs);

router.get("/get/categories",categoryController.getAllCategories);
router.post("/add/categories",categoryController.addNewCategory);

 export default router;
 