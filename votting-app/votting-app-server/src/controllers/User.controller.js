import User from "../database/models/User.model";

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    return res.status(200).json({success: true, data: users});
}

export const getUserById = async(req, res) => {
    // user if user exists first
    res.send(JSON.stringify(req))
    // const user = await User.findById({id: req.para})
}
 5