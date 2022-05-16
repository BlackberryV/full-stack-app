import mongoose from "mongoose";

const TypeBrand = new mongoose.Schema({
    typeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Type'},
    brandId: {type: mongoose.Schema.Types.ObjectId, ref: 'Brand'},
})

export default mongoose.model('TypeBrand', TypeBrand)