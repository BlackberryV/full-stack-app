import {Schema, model} from "mongoose";

const BasketDevice = new Schema({
    deviceId: {type: Schema.Types.ObjectId, ref: 'Device'},
    basketId: {type: Schema.Types.ObjectId, ref: 'Basket'},
})

export default model('BasketDevice', BasketDevice)