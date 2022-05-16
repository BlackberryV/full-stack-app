import mongoose from "mongoose";

const Rating = new mongoose.Schema({
    deviceId: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    rate: {type: Number, required: true}
})

export default mongoose.model('Rating', Rating)