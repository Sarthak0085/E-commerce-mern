import express from "express";
import { isAdmin, signInRequire } from "../middlewares/authMiddleware.js";
import * as category from "../controllers/categoryController.js";

const router = express.Router();



// create category route **** Admin & Private Route ****
router.post("/create-category", signInRequire, isAdmin, category.createCategory);

// update category route **** Admin & Private Route ****
router.put("/update-category/:id", signInRequire, isAdmin, category.updateCategory);

// get all category route **** Public Route ****
router.get("/get-category", category.getAllCategory);

// get single category route **** Public Route ****
router.get("/get-category/:slug", category.getSingleCategory);

// delete category route **** Private & Admin Route ****
router.delete("delete-category/:id", signInRequire, isAdmin, category.deleteCategory);


export default router;