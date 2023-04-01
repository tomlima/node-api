const user = require('../models/user')
const crypt = require('bcrypt')

module.exports = {
  create: async (req, res) => {
    try {
      req.body.password = crypt.hashSync(
        req.body.password,
        crypt.genSaltSync(10)
      )
      const result = await user.create(req.body)
      return res.status(200).json({
        success: 1,
        data: result
      })
    } catch (err) {
      return res.status(500).json({
        success: 0,
        message: err
      })
    }
  },

  getAll: async (req, res) => {
    try {
      const result = await user.getAll()
      return res.json({
        success: 1,
        data: result
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        success: 0,
        message: err
      })
    }
  },

  update: async (req, res) => {
    try {
      const user = await user.getById(req.params.id)
      if (req.body.password !== '') {
        req.body.password = hashSync(req.body.password, genSaltSync(10))
      }
      const result = await user.update(req.params.id, req.body)
      return res.json({
        success: 1,
        data: result
      })
    } catch (err) {
      return res.status(500).json({
        success: 0,
        message: err
      })
    }
  },
  delete: async (req, res) => {
    try {
      const result = await user.delete(req.params.id)
      return res.json({
        success: 1,
        data: result
      })
    } catch (err) {
      return res.status(500).json({
        success: 0,
        message: err
      })
    }
  }
}
