import { decode } from "jsonwebtoken";

const AuthMiddleware = async(req, res, next) => {
    try{
        const bearerToken = req.headers.authorization;
        const token = bearerToken.split(' ')[1];
        if(!token) return res.status(401).json({success: false, message: "Unauthorized"});
        const decoded = decode(token, {key: process.env.JWT_KEY});
        if(!decoded) return res.status(401).json({success: false, message: "Unauthorized"});
        req.user = decoded;
        next();
    }
    catch(e){
        res.status(401).json({success: false, message: "Unauthorized"});
    }
}
export default AuthMiddleware;