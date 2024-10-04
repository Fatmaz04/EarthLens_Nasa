import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/i, // Validator: Must match email format
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    challengeDate: {
        type: Date,
        required: true
    }
})

const User = mongoose.model("User",userSchema)

export default User