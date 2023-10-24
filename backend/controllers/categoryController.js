import slugify from "slugify";
import Category from "../models/categoryModel.js";


//create category
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
          return res.status(401).send({ error: "Category Name is required" });
        }

        // check category exist
        const isCategoryExist = await Category.findOne({ name });

        if (isCategoryExist) {
            return res.status(200).send({
                success: true,
                error: "Category Already Exists",
            });
        }

        const category = new Category({ name, slug: slugify(name) }).save();

        res.status(201).send({
            succes: true,
            message: "New Category Created",
            category,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in creating category",
            error,
        })
    }
}


// update category using category id
export const updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(401).send({
                success: false,
                error: "Category doesn't Exist",
            });
        }

        const updatedCategory = await Category.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });

        res.status(200).send({
            success: true,
            message: "Category Updated Successfully",
            updatedCategory,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while updating category",
            error,
        })
    }
}

// get all categories
export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find({});
        if (!categories) {
            return res.status(401).send({
                success: false,
                error: "No Category created yet.",
            });
        }
        res.status(200).send({
            success: true,
            message: "All Categories List",
            categories
        })
    } catch (error) {
       console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting all categories",
            error,
        }) 
    }
}

//get single category by slug
export const getSingleCategory = async (req, res) => {
    try {
        const category = await Category.findOne({slug: req.params.slug});
        if (!category) {
            return res.status(401).send({
                success: false,
                message: "Category Not Exist",
            });
        }
        res.status(200).send({
            success: true,
            message: "Get Category Successfully",
            category
        })
    } catch (error) {
       console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting single category"
        }) 
    }
}

// delete category using category id
export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete({id: req.params.id});
        if (!category) {
            return res.status(401).send({
                success: false,
                message: "Category doesn't Exist",
            });
        }
        res.status(200).send({
            success: true,
            message: "Category deleted successfully",
            category
        })
    } catch (error) {
       console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting the category",
            error,
        }) 
    }
}