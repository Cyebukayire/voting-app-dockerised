import express from "express";
const app = express();
app.get('/', (req, res)=> res.send("Welcome to the VOTE App"));

app.listen(5000, ()=> console.log('The app is running on port 5000'));