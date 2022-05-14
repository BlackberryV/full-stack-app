import {model, Schema} from "mongoose";

const User = new Schema({
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
    role: [{
        type: String,
        defaultValue: 'USER'
    }]
})

export default model('User', User)