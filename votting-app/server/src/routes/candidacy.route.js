import { deleteCandidacy, getAllCandidacies, getCandidacyById, getCandidacyByUserId, updateCandidacy, uploadCandidacy, vote } from "../controllers/candidacy.controller";
import express from 'express'
import AuthMiddleware from "../middlewares/auth.middleware";
import { registerDefinition } from "swaggiffy";

const router = express.Router();

router.post('/upload',AuthMiddleware, uploadCandidacy);
router.get('/', getAllCandidacies);
router.get('/:id', getCandidacyById);
router.get('/user/:id', getCandidacyByUserId);
router.put('/:id',updateCandidacy); 
router.delete('/:id',AuthMiddleware, deleteCandidacy);
router.put('/:id/vote', AuthMiddleware, vote);

registerDefinition(router, {tags: 'Candidacies', basePath: '/api/v1/candidacy', mappedSchema: 'Candidacy'});
export default router;