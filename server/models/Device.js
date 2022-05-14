import {Schema, model} from "mongoose";

const Device = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true
    },
    rating: {},
    images: [{type: String}],
    typeId: {type: Schema.Types.ObjectId, ref: 'Types'},
    brandId: {type: Schema.Types.ObjectId, ref: 'Brand'}
})