import express from "express";
import { addBouns, addRate, getRates, getUserRates } from "../controllers/RateController.js";

const router = express.Router();

router.get("/", (req, res) => {

})

router.get("/get-rates", getRates);

router.post("/add-rate", addRate);

router.post("/add-bouns", addBouns)

router.post("/get-user-rates", getUserRates);

export {router as rateRouter}