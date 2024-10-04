import User from "../models/user.js";
import Rate from "../models/rate.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { excludePassword } from "../utils/userUtils.js";

//node populates automatically the req and res objects to the cb function
const signUp = async (req, res) => {
    const {email, name, password, confirmPassword} = req.body;
    if(password != confirmPassword)
        return res.status(409).json({ message: "passwords don't match" });
    try {
        const user = await User.findOne({ email });
        if (user)
            return res.status(409).json({ message: "email is already used" });
        const hashedPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS,10));
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - 2);
        const newUser = new User({ email, name: name, password: hashedPassword, challengeDate: pastDate });
        await newUser.save();
        const zeroRates = new Array(5).fill(0);
        const newUserRates = new Rate({email: email, rate: zeroRates, sum: 0, bouns: 0});
        newUserRates.save();
        const token = jwt.sign({ id: newUser._id }, process.env.TOKEN_SECRET);
        res.status(201).json({ message: 'User registered successfully', user: excludePassword(newUser), token });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
}

const signIn = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(401).json({ message: 'User not found' });
        const storedPassword = user.password
        const comparePasswords = await bcrypt.compare(password, storedPassword)
        if (!comparePasswords)
            return res.status(401).json({ message: 'Invalid password' });
        const getRates = await Rate.findOne({email});
        let userRates;
        if (!getRates)
            userRates = new Array(5).fill(0);
        else userRates = getRates.rate
        const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
        const userWithoutPassword = excludePassword(user);
        res.status(201).json({
            user: userWithoutPassword,
            token,
            Rates: userRates
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {signIn,signUp}