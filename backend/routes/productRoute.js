import express from "express";
import { isAdmin, signInRequire } from "../middlewares/authMiddleware.js";
import * as product from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

/**** Admin , Private Route ****/

// creating product route 
router.post("/create-product", signInRequire, isAdmin, formidable(), product.createProduct);

// updating product route 
router.post("/update-product/:prodId", signInRequire, isAdmin, formidable(), product.updateProduct);

// delete product route 
router.post("/delete-product/:prodId", signInRequire, isAdmin, product.deleteProduct); 


/**** Public routes ****/

// get all producs route 
router.get("/get-product", product.getAllProduct);

// get single product route using slug
router.get("/get-product/:slug", product.getSingleProduct);

//get photo
router.get("/product-photo/:prodId", product.productPhoto);

router.get("/search/:keyword", product.searchProduct);

export default router;