import express from 'express'
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/user.controller.js'
const router = express.Router()

router.post('/',  createUser)
router.get('/',  getUsers)
router.put('/:id',  updateUser)
router.delete('/:id',  deleteUser)

export default router