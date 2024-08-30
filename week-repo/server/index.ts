import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth";
import fileRoutes from "./routes/file";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/file", fileRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect('mongodb+srv://abdulhafeeztechy:nazima3786@cluster0.xt9hp.mongodb.net/');
