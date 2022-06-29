import { getAllUsers, getUserById } from "../controllers/User.controller";
import express from 'express';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/id/:id',getUserById);
export default router;