import mongoose from "mongoose";
export const DbConnection = async () => {
    mongoose.connect("mongodb://localhost:27017/learning")
    .then(()=>{
        console.log('Connected to DB!')
    })
    .catch((e) => {
        console.error(e,"\n\nCan't connect to DB");
    })
}