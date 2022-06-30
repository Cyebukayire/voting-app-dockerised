import { decode } from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.split(' ')[1];
        if(!token) return res.status(401).json({success: false, message: "unathorized"})
        const decoded = decode(token, {key: "PRIVATEKEY22211"})
        if(!decoded) res.status(401).json({success: false, message: "unauthorized"})
        req.user = decoded;
        next();
    }catch(e){
        res.status(401).json({success: false, message: "unauthorized"})
    }
}
export default authMiddleware;