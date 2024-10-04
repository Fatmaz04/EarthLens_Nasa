import Rate from "../models/rate.js";
import User from "../models/user.js";
import { getLeaders } from "../config/db.js";

const addRate = async (req, res) => {
    const { email, chapterId, rate } = req.body;

    try {
        const userRate = await Rate.findOne({ email });
        const rates = new Array();
        let sum = 0;
        for (let count = 0; count < 5; count++) {
            if (count == chapterId - 1) {
                const put = Number(Math.max(rate, userRate.rate[count])) 
                rates.push(put);
                sum += parseInt(put);
            }
            else if (userRate) {
                rates.push(userRate.rate[count]);
                sum += parseInt(userRate.rate[count]);
            }
            else rates.push(0);
        }
        sum += userRate.bouns;
        if (userRate)
            await Rate.updateOne({ email: email }, { rate: rates, sum: sum, bouns: userRate.bouns });
        else {
            const newUserRate = new Rate({ email: email, rate: rates, sum: sum });
            newUserRate.save();
        }
        res.status(200).json({ message: "Rate added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Adding the rate failed", error: error.message });
    }
}

const addBouns = async (req, res) => {
    try {
        const bouns = Number(req.body.points), email = req.body.email;
        const today = new Date();
        const userRates = await Rate.findOne({email});
        const userData = await User.findOne({email});
        console.log(req.body)
        console.log(bouns, email);
        console.log(userData, userRates)
        const newBouns = userRates.bouns + bouns, newSum = userRates.sum + bouns;
        await Rate.updateOne({email: email}, {rate: userRates.rates, sum: newSum, bouns: newBouns});
        await User.updateOne({email: email}, {challengeDate: today, name: userData.name, password: userData.password});
        res.status(200).json({message: "Bouns added successfully"});
    } catch (error) {
        res.status(500).json({message: "Adding the bouns failed", error: error.message});
    }
}

const getRates = async (req, res) => {
    try {
        const leaderBoard = await getLeaders();
        res.status(201).json({ message: "Leaderboard is ready", leaders: leaderBoard.slice(0, 5)});
    } catch (error) {
        res.status(500).json({ message: "something wrong happened", error: error.message });
    }
}

const getUserRates = async (req, res) => {
    const {email} = req.body;
    try {
        const userData = await Rate.findOne({email})
        res.status(201).json({message: "User data is available", userData: userData});
    } catch (error) {
        res.status(500).json({ message: "something wrong happened", error: error.message });
    }
}

export { addRate, addBouns, getRates, getUserRates };