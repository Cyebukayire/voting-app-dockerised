import { json } from "express";
import User from "../database/models/User.model";

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    return res.status(200).json({success: true, data: users});
}

export const getUserById = async(req, res) => {
    // user if user exists first
    const user = await User.findById({_id: req.params.id})
    if(!user) return res.status(400).json({success: false, message: "user not found"});
    return res.status(200).json({success: true, data: user});
}

 export const getUserByEmail = async(req, res) => {
    // existence
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json({success: false, message: "user not found"});
    return res.status(200).json({success: true, data: user});
 }

 export const getUserByName = async(req, res) => {
    // existence
    const user = await User.findOne({name: req.body.name});
    if(!user) return res.status(400).json({success: false, message: "user not found"});
    return res.status(200).json({success: true, data: user});
 }

 export const deleteUser = async(req, res) => {
    const user = await User.findOneAndDelete({_id: req.params.id});
    if(!user) return res.status(400).json({success: false, message: "user not founnd"});
    return res.status(400).json({success: true, data: user});
 }

 export const updateUser = async(req, res) =>{
   // check user existence
   let user = await User.findOne({_id: req.params.id});
   if(!user) return res.status(400).json({success: false, message: "User not found"});
//    res.send(user);
   user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
   res.status(200).json({success: true, data: user});
 }

 export const deleteAllUsers = async (req, res) => {
    const rows = await User.deleteMany({})
    if(!rows) return res.staus(400).json({success: false, message: "something went wrong"});
    return res.status(200).json({success: true, message: `data has been deleted`});
 }

