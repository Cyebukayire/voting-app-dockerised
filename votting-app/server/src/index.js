import express from 'express'
import connectToDB from './database'
import authRoute from './routes/user.route'
import 'dotenv/config'
import candidacyRoute from './routes/candidacy.route'
import cors from 'cors'

// db();

connectToDB();

const app = express()
const port = 5000;

app.use(express.json());
app.use(cors()) // to allow requests from different origins /sites

app.get('/api',(req, res) => {
    res.send("Welcome to app");
})

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/candidacy', candidacyRoute);
// app.use('/api/v1/candidacy', userRoute);

app.listen(port, ()=> console.log(`app is running on port ${port}`));