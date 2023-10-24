import JWT from "jsonwebtoken";
import User from "../models/userModel.js";

export const signInRequire = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}


export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user.role.equals("ADMIN")) {
            res.status(401).send({
                success: false,
                message: "Unauthorized Access",
            })
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
    }
}