import mongoose from 'mongoose'

export const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017/learning", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log("Connected to DB");
    })
    .catch((e) => {
        console.log(e);
    })
}