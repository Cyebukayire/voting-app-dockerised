import mongoose from "mongoose";
import { registerDefinition, registerSchema } from 'swaggiffy';

const obj = {
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
}
const Schema = mongoose.Schema(obj, {
    timestamps: true,
})

registerSchema('Candidacy', obj)

const Candidacy = mongoose.model("Candidacy", Schema, "candidacies");
export default Candidacy;

