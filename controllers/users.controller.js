const users = require("../models/users.model")

const usersController = {
  deleteUser: (req,res) => {
    users.deleteUser( req.params.id, (err,result) => {
      handleOutput(res,err,result)
    })
  },
  getUsers: (req,res) => {
    users.getUsers( (err,result) => {
      handleOutput(res,err,result)
    })
  },
  getUser: (req,res) => {
    users.getUser(req.params.id, (err, result) => {
      handleOutput(res,err,result)
    })
  },
  insertUser: (req, res) => {
    users.insertUser( req.body, (err,result) => {
      handleOutput(res,err,result)
    })
  },
  updateUser: (req,res) => {
    users.updateUser(req.params.id, req.body, (err,result) => {
      handleOutput(res,err,result)
    } )
  },
}

const handleOutput = (res,err,result) => {
  if(err) return res.status(500).json({
    success:0,
    err: err
  })
  return res.json({
    success: 1,
    data: result
  })
} 

module.exports = usersController