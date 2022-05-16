import {Router} from "express";
import BrandController from "../controllers/BrandController.js";

const brandRouter = new Router()

brandRouter.post('/', BrandController.create)
brandRouter.get('/', BrandController.getAll)

export default brandRouter