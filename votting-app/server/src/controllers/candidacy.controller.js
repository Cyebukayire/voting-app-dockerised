import Candidacy from '../database/models/candidacy.model';
import User from '../database/models/user.model';

export const uploadCandidacy = async (req, res) => {
    const userId = req.user._id; // We are getting this from Auth Middleware
    const {description, avatar} = req.body;

    const userExist = await User.findOne({_id: userId});
    if(!userExist) return res.status(400).json({success: false, message: "User does not exist"});

    const candidacyExist = await Candidacy.findOne({userID: userId});
    if(candidacyExist) return res.status(400).json({success: false, message: "Candidacy already exist"});

    const candidacy = new Candidacy({userID: userId, description, avatar});
    await candidacy.save();

    return res.status(201).json({success: true, data: candidacy});
}

export const getAllCandidacies = async (req, res) => { 
    const candidacies = await Candidacy.find();
    const candidaciesWithUser= [];

    candidacies.forEach(async (candidacy)=>{
        const user = await User.findOne({_id: candidacy.userID});
        candidaciesWithUser.push({
            _id: candidacy._id,
            user: user,
            votes: candidacy.votes,
            avatar: candidacy.avatar,
            description: candidacy.description
        });
        if(candidaciesWithUser.length === candidacies.length){
            return res.status(200).json({success: true, data: candidaciesWithUser})
           }
    });
   
}

export const getCandidacyById = async (req, res) => {
    const candidacy = await Candidacy.findOne({_id: req.params.id});
    if(!candidacy) return res.status(404).json({success: false, message: "Candidacy does not exist"});
    return res.status(200).json({success: true, data: candidacy});
}

export const getCandidacyByUserId = async (req, res) => {
    const candidacy = await Candidacy.findOne({userID: req.params.id});
    if(!candidacy) return res.status(400).json({success: false, message: "Candidacy does not exist"});
    return res.status(200).json({success: true, data: candidacy});
}

export const updateCandidacy = async (req, res) => {
    const candidacy = await Candidacy.findOne({_id: req.params.id});
    if(!candidacy) return res.status(404).json({success: false, message: "Candidacy does not exist"});
    const newCandidacy = await Candidacy.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    return res.status(200).json({success: true, data: newCandidacy});
}

export const deleteCandidacy = async (req, res) => {
    const candidacy = await Candidacy.findOne({_id: req.params.id});
    if(!candidacy) return res.status(404).json({success: false, message: "Candidacy does not exist"});
    await Candidacy.findOneAndDelete({_id: req.params.id});
    return res.status(200).json({success: true, data: candidacy});
}

export const vote = async (req, res) => {
    const candidacy = await Candidacy.findOne({_id: req.params.id});
    if(!candidacy) return res.status(404).json({success: false, message: "Candidacy doesn't exist"});
    candidacy.votes += 1;
    await candidacy.save();
    return res.status(200).json({success: true, data: candidacy, message: 'Successfully voted'});
}