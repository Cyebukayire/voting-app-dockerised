import { Signin, Signup } from "../controllers/Auth.controller";
import express from 'express';

const router = express.Router();
router.post('/signup', Signup);
router.post('/signin', Signin);

export default router;