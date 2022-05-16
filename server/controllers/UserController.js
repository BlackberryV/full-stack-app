import ApiError from "../error/ApiError.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import Basket from "../models/Basket.js";
import jwt from 'jsonwebtoken'

const generateToken = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}

class UserController {
    async register(req, res, next) {
        try {
            const {email, password, role} = req.body
            const candidate = await User.findOne({email})
            if (candidate) {
                return next(ApiError.badRequest('User with such an email exists'))
            }
            const hashPassword = bcrypt.hashSync(password, 5)
            const user = await User.create({email, password: hashPassword, role})
            const basket = await Basket.create({userId: user._id})
            const token = generateToken(user._id, email, user.role)
            return res.json({token})
        } catch (e) {
            console.log(e.message)
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            return next(ApiError.badRequest('User with such an email does not exist'))
        }
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if (!isValidPassword) {
            return next(ApiError.badRequest('Wrong password'))
        }
        const token = generateToken(user._id, email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateToken(req.user._id, req.user.email, req.user.role)
        return res.json({token})
    }
}

export default new UserController();