import express from 'express'
import {config} from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import router from "./routes/index.js";
import fileUpload from 'express-fileupload'
import {errorHandlingMiddleware} from "./middlewares/ErrorHandlingMiddleware.js";
import path from 'path'
import {fileURLToPath} from "url";

config()
const PORT = process.env.PORT || 7000
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//last middleware
app.use(errorHandlingMiddleware)

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
