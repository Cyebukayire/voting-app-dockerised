import mongoose from "mongoose";
const Schema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true,
        default: 0
    },
    avatar: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Candidacy = mongoose.model("Candidacy", Schema, "candidacies");
export default Candidacy;