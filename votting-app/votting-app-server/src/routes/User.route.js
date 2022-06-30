import { deleteAllUsers, deleteUser, getAllUsers, getUserByEmail, getUserById, getUserByName, updateUser } from "../controllers/User.controller";
import express from 'express';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/id/:id', getUserById);
router.get('/name', getUserByEmail);
router.get('/email', getUserByName);
router.delete('/all/delete', deleteAllUsers)
router.delete('/:id/delete', deleteUser);
router.put('/:id', updateUser);
export default router;