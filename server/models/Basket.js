import mongoose from "mongoose";

const Basket = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

export default mongoose.model('Basket', Basket)