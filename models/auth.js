const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  authenticate: (user, receivedPassword) => {
    return new Promise((resolve, reject) => {
      const result = bcrypt.compareSync(receivedPassword, user.Password)
      if (result) {
        user.Password = undefined
        const jsontoken = jwt.sign({ data: user }, process.env.JWT_SECRET, {
          expiresIn: '5h'
        })
        resolve(jsontoken)
      } else {
        resolve(false)
      }
    })
  }
}
