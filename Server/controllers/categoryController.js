import categoryModel from "../models/categoryModel.js";
class categoryController{
    static getAllCategories = async(req,res)=>{
       try{
            const fetchAllCategories = await categoryModel.find({});
            return res.status(200).json(fetchAllCategories);
       }catch(error){
        return res.status(400).json({ message : error.message});
       }
    };
    static addNewCategory = async(req,res)=>{
       const { title } = req.body;
       try{
            if(title){
                        const newcategory =new categoryModel({
                            title,
                        });
                        const saveCategory = await newcategory.save();
                           if(saveCategory){
                            return res
                            .status(200)
                            .json({ message : "category added successfully"});
                           }
            }
            else{
                return res.status(400).json({ message : "all fields are require"});
            }
       }catch(error){
        return res.status(400).json({ message : error.message});
       }
    };
}


export default categoryController;