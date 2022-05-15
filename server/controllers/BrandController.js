import Brand from "../models/Brand.js";

class BrandController {
    async create(req, res) {
        try {
            const {name} = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (e) {

        }
    }

    async getAll(req, res) {
        try {
            const brands = await Brand.find()
            return res.json(brands)
        } catch (e) {

        }
    }
}

export default new BrandController()