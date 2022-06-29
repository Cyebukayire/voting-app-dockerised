import mongoose from "mongoose";

const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
}, 
{
    timestamps: true
})

const User = mongoose.model("User", Schema);

export default User;