import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";

//configuring env
dotenv.config();

const app = express();

//connecting database
connectDb();


//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


//rest api
app.get("/", (req, res) => {
    res.send({
        message: "E-commerce working"
    })
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`E-commerce is workinng on the port : ${port}`);
})