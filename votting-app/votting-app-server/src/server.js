import express from "express";
import { DbConnection } from "./database";
import authRouter from './routes/Auth.route';

DbConnection();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
// app.use(cors());
app.get('/api/v1', (req,res) => res.send("Welcome to Server!"))
app.use('/api/v1/auth', authRouter )

app.listen(port, ()=> console.log(`The server is running on ${port}`));