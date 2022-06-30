const authMiddleware = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        next();
    }catch(e){
        res.status(200).json({success: false, message: "unauthorized"})
    }
}
export default authMiddleware;