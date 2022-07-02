import { getProfile, signin, signup } from "../controllers/auth.controller";
import { Router } from "express";
import AuthMiddleware from "../middlewares/auth.middleware";

// const router= express.Router();
const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', AuthMiddleware, getProfile);
export default router;

