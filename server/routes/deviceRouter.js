import {Router} from "express";
import DeviceController from "../controllers/DeviceController.js";

const deviceRouter = new Router()

deviceRouter.post('/', DeviceController.create)
deviceRouter.get('/', DeviceController.getAll)
deviceRouter.get('/:id', DeviceController.getOneById)

export default deviceRouter