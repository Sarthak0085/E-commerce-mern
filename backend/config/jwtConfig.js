import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const generateToken = async (id) => {
    return JWT.sign(id, process.env.JWT_SECRET, { expiresIn: "5d" });
}