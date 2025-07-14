import express from "express";
import { signIn, signUp } from "../controllers/userController.js";

const router = express.Router();

router.post("/sign-in", signIn)

router.post("/sign-up", signUp)

export {router as userRouter}