import {Schema, model} from "mongoose";

const Brand = new Schema({
    name: {type: String}
})

export default model('Brand', Brand)