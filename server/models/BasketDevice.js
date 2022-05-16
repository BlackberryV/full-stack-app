import mongoose from "mongoose";

const BasketDevice = new mongoose.Schema({
    deviceId: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'},
    basketId: {type: mongoose.Schema.Types.ObjectId, ref: 'Basket'},
})

export default mongoose.model('BasketDevice', BasketDevice)