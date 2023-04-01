const express = require('express')
const controller = require('../controllers/user.controller')

const router = express.Router()

router.post('/', controller.createUser)
router.get('/', controller.getUsers)
router.put('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)

module.exports = router
