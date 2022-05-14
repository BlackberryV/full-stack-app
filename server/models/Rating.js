import {Schema, model} from "mongoose";

const Rating = new Schema({
    deviceId: {type: Schema.Types.ObjectId, ref: 'Device'},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    rate: {type: Number, required: true}
})

export default model('Rating', Rating)