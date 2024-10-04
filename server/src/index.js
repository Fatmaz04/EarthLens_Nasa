import express from "express";
import env from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { userRouter } from "./Routes/userRoutes.js";
import { rateRouter } from "./Routes/rateRoutes.js";

env.config({path:'../.env'})

const app = express();
const port = 5000;
connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user",userRouter);
app.use("/rate", rateRouter);

app.listen(port,()=>{
    console.log(`application started listenning on port ${port}`)
})