import express from 'express'
import {config} from 'dotenv'
import mongoose from "mongoose";

config()
const PORT = process.env.PORT || 7000

const app = express()

app.use(express.json())

function start() {
    try {
        mongoose.connect('mongodb+srv://Viktoriia:FnbdSqQ4Z8ivecx@cluster0.z4tex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            () => console.log('DB connected'))
        app.listen(PORT, () => console.log('Server started at PORT ' + PORT))
    } catch (e) {
        console.log(e.message)
    }
}

start()
