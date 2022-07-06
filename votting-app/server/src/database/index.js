import mongoose from 'mongoose'

const connectToDB = async () => {
    const localDB= process.env.NODE_ENV
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