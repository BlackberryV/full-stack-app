import mongoose from "mongoose";

const Type = new mongoose.Schema({
        name: {type: String},
    }, {timestamps: true}
)

export default mongoose.model('Type', Type)