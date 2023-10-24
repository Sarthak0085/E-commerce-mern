import slugify from "slugify";
import Product from "../models/productModel.js";
import fs from "fs";


// create product
export const createProduct = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;
        // validation
        switch (true) {
            case !name:
                res.status(401).send({ error: "Name is required" });
            case !description:
                res.status(401).send({ error: "Description is required" });
            case !price:
                res.status(401).send({ error: "Price is required" });
            case !category:
                res.status(401).send({ error: "Category is required" });
            case !quantity:
                res.status(401).send({ error: "Quantity is required" });
            case photo && photo.size > 1000000:
                res.status(401).send({ error: "Photo is required and size must be less than 1mb" });
        }
        const product = new Product({ ...req.fields, slug: slugify(name) });
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }

        await product.save();

        res.status(200).send({
            success: true,
            message: "Product created successfully",
            product
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while creating product",
            error: error.message
        })
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({}).select("-photo").populate("category").limit(12).sort({ createdAt: -1 });
        if (!products) {
            return res.status(401).send({ error: "No Product found" });
        }
        res.status(200).send({
            success: false,
            message: "All Product List",
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting all products",
            error: error.message
        })
    }
}

//get single product using slug
export const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug }).select("-photo").populate("category");
        if (!product) {
            return res.status(401).send({
                error: "Product doesn't exist",
            })
        }
        res.status(200).send({
            success: true,
            message: "Single Product fetched",
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting single product",
            error: error.message
        })
    }
}

//get product photo
export const productPhoto = async (req, res) => {
    try {
        const product = await Product.findById(req.params.prodId).select("photo");
        if (product.photo.data) {
            res.set('Content-Type', product.photo.contentType);
            res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting product Photo",
            error: error.message
        })
    }
}

//delete product
export const deleteProduct = async (req, res) => {
    try {
        const product = await findByIdAndDelete(req.params.prodId).select("-photo");
        if (!product) {
            return res.status(401).send({
                error: "Product doesn't exist",
            })
        }
        res.status(200).send({
            success: true,
            message: "Product deleted successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting product",
            error: error.message
        })
    }
}


// update the product
export const updateProduct = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;
        // validation
        switch (true) {
            case !name:
                res.status(401).send({ error: "Name is required" });
            case !description:
                res.status(401).send({ error: "Description is required" });
            case !price:
                res.status(401).send({ error: "Price is required" });
            case !category:
                res.status(401).send({ error: "Category is required" });
            case !quantity:
                res.status(401).send({ error: "Quantity is required" });
            case photo && photo.size > 1000000:
                res.status(401).send({ error: "Photo is required and size must be less than 1mb" });
        }
        const product = await Product.findByIdAndUpdate(req.params.prodId, { ...req.fields, slug: slugify(name) }, { new: true });
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }

        await product.save();

        res.status(200).send({
            success: true,
            message: "Product updated successfully",
            product
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while updating product",
            error: error.message
        })
    }
}

//search product
export const searchProduct = async (req, res) => {
    try {
        const { keyword } = req.params;
        const products = await Product.find({
            $or: [
                { name: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        }).select("-photo");
        res.send(products);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while search product API",
            error: error.message
        })
    }
}