import {Schema, model} from "mongoose";

const DeviceInfo = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

export default model('DeviceInfo', DeviceInfo)