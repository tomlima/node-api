const express = require('express')
const controller = require('../controllers/user')
const jwt = require('../services/jwtValidation')

const router = express.Router()

router.post('/', controller.create)
router.get('/', jwt.checkToken, controller.getAll)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
