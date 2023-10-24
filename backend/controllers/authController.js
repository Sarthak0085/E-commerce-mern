import { generateToken } from "../config/jwtConfig.js";
import { comparePassword, hashPassword } from "../helpers/authHelpers.js";
import User from "../models/userModel.js";

//register user
export const register = async (req, res) => {
    //getting value from req.body
    const { firstName, lastName, email, answer, password, mobile } = req.body;
    try {
        if (!firstName) {
            res.send({ error: "First Name is required" });
        }
        if (!lastName) {
            res.send({ error: "Last Name is required" });
        }
        if (!email) {
            res.send({ error: "E-mail is required" });
        }
        if (!password) {
            res.send({ error: "Password is required" });
        }
        if (!answer) {
            res.send({ error: "Answer is required" });
        }
        if (!mobile) {
            res.send({ error: "Mobile Number is required" });
        }

        // check user exist
        const isUserExist = await User.findOne({ email });

        //throw error message if user exist
        if (isUserExist) {
            res.status(200).send({
                success: true,
                message: "Already Register, Please login"
            });
        }

        // create user if doesn't exist

        //hashing password before saving it into database
        const hashedPassword = await hashPassword(password);

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            address,
            mobile,
            answer
        }).save();

        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
}


// login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if email or password exist
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                error: "Invalid email or password",
            })
        }
        // check user exist
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                error: "Email is not registered",
            })
        }

        // comparing password
        const match = await comparePassword(password, user.password);

        if (!match) {
            return res.status(404).send({
                success: false,
                error: "Password doesn't match",
            })
        }

        // generate token 
        const token = await generateToken(user._id);

        res.status(200).send({
            success: true,
            message: "Login Successfully",
            user: {
                firstName: user?.firstName,
                lastName: user?.lastName,
                email: user?.email,
                mobile: user?.mobile,
                address: user?.address
            },
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}

// forgot password
export const forgotPassword = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;
        if (!email) {
            res.send({ error: "E-mail is required" });
        }
        if (!answer) {
            res.send({ error: "Answer is required" });
        }
        if (!newPassword) {
            res.send({ error: "New Password is required" });
        }

        //find user
        const user = await User.findOne({ email, answer });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Wrong email or answer",
            })
        }

        // if find now first hash its password
        const hashedPassword = await hashPassword(newPassword);

        await User.findByIdAndUpdate(user._id, { password: hashedPassword }).save();

        res.status(200).send({
            success: true,
            message: "Password Reset Successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}