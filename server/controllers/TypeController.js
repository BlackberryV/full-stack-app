import Type from "../models/Type.js";
import ApiError from "../error/ApiError.js";

class TypeController {

    async create(req, res) {
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const types = await Type.find()
            return res.json(types)
        } catch (e) {

        }
    }
}

export default new TypeController();