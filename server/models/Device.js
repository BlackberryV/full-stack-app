import mongoose from "mongoose";

const Device = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true
    },
    rating: {type: Number, default: 0},
    image: {type: String},
    typeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Types'},
    brandId: {type: mongoose.Schema.Types.ObjectId, ref: 'Brand'},
})

export default mongoose.model('Device', Device)