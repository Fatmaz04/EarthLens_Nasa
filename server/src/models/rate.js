import mongoose from "mongoose";

const rateSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/i, // Validator: Must match email format
    },
    rate: {
        type: [Number],
        required: true,
    },
    sum: {
        type: Number,
        required: true,
    },
    bouns: {
        type: Number,
        required: true
    }
})

const Rate = mongoose.model("Rate",rateSchema)

export default Rate