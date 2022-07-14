const user = require("../models/user.model")

const userController = {
  getUsers: (req,res) => {
    user.getUsers( (err,result) => {
      if(err) return
      return res.json({
        success: 1,
        data: result
      })
    })
  }
}

module.exports = userController