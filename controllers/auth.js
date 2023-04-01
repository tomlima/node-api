const userModel = require('../models/user')
const auth = require('../models/auth')

module.exports = {
  login: async (req, res) => {
    try {
      const user = await userModel.getByEmail(req.body.email)
      // Check if user exist
      if (!user) {
        return res.status(404).json({
          success: 0,
          message: 'User doest not exist'
        })
      }
      // Check user password
      const token = await auth.authenticate(user, req.body.password)
      if (token == false) {
        return res.status(401).json({
          success: 0,
          message: 'Invalid password'
        })
      }
      return res.status(200).json({
        success: 1,
        message: 'login successfully',
        token: token
      })
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        success: 0,
        data: err
      })
    }
  }
}
