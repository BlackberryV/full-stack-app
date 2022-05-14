import {Schema, model} from "mongoose";

const Basket = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

export default model('Basket', Basket)