import express from "express";
import categoryController from "../controllers/categoryController.js";
import BlogController from "../controllers/blogController.js";
import AuthController from "../controllers/AuthController.js";
import multer from "multer";
import checkIsUserAuthenticated from "../middleware/authMiddleare.js";

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

router.get("/get/allblogs",checkIsUserAuthenticated,BlogController.getAllBlogs);
router.post("/add/blog", upload.single("thumbnail"),checkIsUserAuthenticated, BlogController.addNewBlogs);
router.get("/get/blogs/:id",checkIsUserAuthenticated,BlogController.getSingleBlogs);

router.get("/get/categories",checkIsUserAuthenticated,categoryController.getAllCategories);
router.post("/add/categories",checkIsUserAuthenticated,categoryController.addNewCategory);

 export default router;
 