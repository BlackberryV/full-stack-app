import jwt from "jsonwebtoken";

export function checkRoleMiddleware(role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') next()
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json('User is not authorized')
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(403).json('You do not have a permission')
            }
            req.user = decoded
            next()
        } catch (e) {
            return res.status(403).json('You do not have a permission')
        }
    }
}