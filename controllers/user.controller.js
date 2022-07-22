const user = require("../models/user.model")

const userController = {
  deleteUser: (req,res) => {
    user.deleteUser( req.params.id, (err,result) => {
        if(err) return
        return res.json({
          success: 1,
          data: result
        })
    })
  },
  getUsers: (req,res) => {
    user.getUsers( (err,result) => {
      if(err) return
      return res.json({
        success: 1,
        data: result
      })
    })
  },
  insertUser: (req, res) => {
    user.insertUser( req.body, (err,result) => {
      if(err) return
      return res.json({
        success: 1,
        data: result
      })
    })
  },
  updateUser: (req,res) => {
    user.updateUser(req.params.id, req.body, (err,result) => {
      if(err) return
      return res.json({
        success: 1,
        data: result
      })
    } )
  }
}

module.exports = userController