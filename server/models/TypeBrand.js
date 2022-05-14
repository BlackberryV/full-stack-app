import {Schema, model} from "mongoose";

const TypeBrand = new Schema({
    typeId: {type: Schema.Types.ObjectId, ref: 'Type'},
    brandId: {type: Schema.Types.ObjectId, ref: 'Brand'},
})

export default model('TypeBrand', TypeBrand)