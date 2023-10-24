import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        trim: true,
        maxLength: 30,
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        trim: true,
        maxLength: 30,
    },
    email: {
        type: String,
        required: [true, "E-mail is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: 8
    },
    mobile: {
        type: String,
        required: [true, "Mobile Number is required"],
    },
    address: {
        type: String,
        // required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
}, { timestamps: true, })


export default mongoose.model("users", userSchema);