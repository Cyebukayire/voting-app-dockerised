import { getProfile, signin, signup } from "../controllers/auth.controller";
import { Router } from "express";
import AuthMiddleware from "../middlewares/auth.middleware";
import { registerDefinition } from "swaggiffy";

// const router= express.Router();
const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', AuthMiddleware, getProfile);

registerDefinition(router, {tags: 'Users', basePath: '/api/v1/users', mappedSchema: 'User'});
export default router;

