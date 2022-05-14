import {Router} from "express";

const userRouter = new Router()

userRouter.post('/register')
userRouter.post('/login')
userRouter.get('/auth')

export default userRouter