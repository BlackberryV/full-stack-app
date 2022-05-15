import {v4} from 'uuid'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import Device from "../models/Device.js";
import ApiError from "../error/ApiError.js";
import DeviceInfo from "../models/DeviceInfo.js";

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {image} = req.files
            const __dirname = dirname(fileURLToPath(import.meta.url))
            let fileName = v4() + '.jpg'
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({
                name,
                price,
                brandId,
                typeId,
                image: fileName
            })

            if (info) {
                JSON.parse(info)
                info.forEach(info => DeviceInfo.create({
                    title: info.title,
                    description: info.description,
                    deviceId: device._id,
                }))
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - page * limit
        let devices;
        let count;
        if (!brandId && !typeId) {
            devices = await Device.find().skip(offset).limit(limit)
            count = await Device.count();
        }
        if (brandId && !typeId) {
            devices = await Device.find({brandId}).skip(offset).limit(limit)
            count = await Device.count({brandId});
        }
        if (!brandId && typeId) {
            devices = await Device.find({typeId}).skip(offset).limit(limit)
            count = await Device.count({typeId});
        }
        if (brandId && typeId) {
            devices = await Device.find({typeId, brandId}).skip(offset).limit(limit)
            count = await Device.count({typeId, brandId});
        }
        return res.json({count, devices})
    }

    async getOneById(req, res) {
        const {id} = req.params
        const device = await Device.findById(id)
        device.info = await DeviceInfo.find({deviceId: device._id})
        return res.json(device)
    }
}

export default new DeviceController()