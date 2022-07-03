import mongoose from 'mongoose'

const connectToDB = async () => {
    const localDB="mongodb://localhost:27017/learning"
    mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> {
        console.log("connected to db");
    })
    .catch((e) => {
        console.log(e);
    })
}

export default connectToDB;