import {Router} from "express";
import UserController from "../controllers/UserController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";

const userRouter = new Router()

userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)
userRouter.get('/check', authMiddleware, UserController.check)

export default userRouter