import express from "express";
import { connectDB } from "./database";

connectDB();

const app = express();
const PORT = 4000;
app.get('/api/v1', (req, res)=> res.send("Welcome to the VOTING App"));

app.listen(PORT , ()=> console.log(`The app is running on port 4000`));