import mongoose from 'mongoose'
import { registerSchema } from 'swaggiffy'

const obj = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type:String,
        required: true
    }
}
const Schema = mongoose.Schema(obj)
registerSchema('User', obj)
const User = mongoose.model("User", Schema);
export default User;