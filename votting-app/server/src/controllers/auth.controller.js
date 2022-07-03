import User from "../database/models/user.model";
import { comparePassword, hashPassword } from "../utils/hash-password";
import Jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    let user = await User.findOne({email: req.body.email});
    if(user){
        res.status(400).json({success: false, message: "User already exists"})
    }else{
        const { name, email, password } = req.body;
        const user = new User({name, email, password});
        user.password = await hashPassword(user.password);

        await user.save();
        res.status(200).json({success: true, data: user});
    }
}

export const signin = async (req, res) => {
    //check user existence
    let user = await User.findOne({email: req.body.email});
    if(user){
        //validate password
        let passwordIsValid = await comparePassword(req.body.password, user.password);
        if(passwordIsValid){
            let token = Jwt.sign({_id: user._id, name: user.name, email: user.email}, process.env.JWT_KEY, {expiresIn: '1h'});
            res.status(200).json({success: true, data: {token: token}});
        }else{
            res.status(401).json({success: false, message: "invalid credentials"});
        }
    }else{
        res.status(401).json({success: false, message: "invalid credentials"});
    }
}

export const getProfile = async (req, res) => {
    return res.status(200).json({success: true, data: req.user});
}


