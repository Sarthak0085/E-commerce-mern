import express from "express";
import { forgotPassword, login, register } from "../controllers/authController.js";

const router = express.Router();


//create routes

// register route
router.post("/register", register);

//login route
router.post("/login", login);

// forgot password route 
router.put("/forgot-password", forgotPassword);


export default router;