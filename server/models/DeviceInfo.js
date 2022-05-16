import mongoose from "mongoose";

const DeviceInfo = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    deviceId: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'}
})

export default mongoose.model('DeviceInfo', DeviceInfo)