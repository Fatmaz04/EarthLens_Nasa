import mongoose from "mongoose"
import env from "dotenv";
import User from "../models/user.js";
import Rate from "../models/rate.js";

env.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the app if the connection fails
    }
}

const getLeaders = async () => {
    try {
        const pipeline = [
            {
                $lookup: {
                    from: 'rates', // The collection to join
                    localField: 'email', // Field from the users collection
                    foreignField: 'email', // Field from the numbers collection
                    as: 'num' // Output array field
                }
            },
            {
                $unwind: '$num'
            },
            {
                $project: {
                    name: 1,
                    sum: '$num.sum'
                }
            },

            {
                $sort: { sum: -1 } // Sort by number in descending order
            }
        ];
        const results = await User.aggregate(pipeline).exec();
        return results;
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
export { getLeaders };