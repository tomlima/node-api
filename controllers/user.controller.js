const user = require('../models/user.model')
const crypt = require("bcrypt")


module.exports = {
  createUser : async(req, res) => {
    try {
      req.body.password = hashSync(body.password, genSaltSync(10))
      const result = user.createUser(req.body)
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
  
  getUsers : async (req, res) => {
    try {
      const result = await user.getUsers()
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

  updateUser: async (req, res) => {
    try {
      const user = await user.getUserById(req.params.id)
      if (req.body.password !== '') {
        req.body.password = hashSync(req.body.password, genSaltSync(10))
      }
      const result = await user.updateUser(req.params.id, req.body)
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
  deleteUser: async(req, res) => {
    try {
      const result = await user.deleteUser(req.params.id)
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





