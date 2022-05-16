import {Router} from "express";
import TypeController from "../controllers/TypeController.js";
import {checkRoleMiddleware} from "../middlewares/checkRoleMiddleware.js";

const typeRouter = new Router()

typeRouter.post('/', checkRoleMiddleware('ADMIN'), TypeController.create)
typeRouter.get('/', TypeController.getAll)

export default typeRouter