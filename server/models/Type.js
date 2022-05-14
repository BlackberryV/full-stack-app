import {Schema, model} from "mongoose";

const Type = new Schema({
    name: {type: String}
})

export default model('Type', Type)