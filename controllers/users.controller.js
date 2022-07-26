const users = require("../models/users.model")

const usersController = {
  deleteUser: (req,res) => {
    users.deleteUser( req.params.id, (err,result) => {
        if(err) return
        return res.json({
          success: 1,
          data: result
        })
    })
  },
  getUsers: (req,res) => {
    users.getUsers( (err,result) => {
      if(err) return
      return res.json({
        success: 1,
        data: result
      })
    })
  },
  getUser: (req,res) => {
    users.getUser(req.params.id, (err, result) => {
      if(err) return
      return res.json({
        success: 1,
        data: result
      })
    })
  },
  insertUser: (req, res) => {
    users.insertUser( req.body, (err,result) => {
      if(err) return
      return res.json({
        success: 1,
        data: result
      })
    })
  },
  updateUser: (req,res) => {
    users.updateUser(req.params.id, req.body, (err,result) => {
      if(err) return
      return res.json({
        success: 1,
        data: result
      })
    } )
  }
}

module.exports = usersController