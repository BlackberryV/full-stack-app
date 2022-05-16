import mongoose from "mongoose";

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'USER'
    }
})

export default mongoose.model('User', User)