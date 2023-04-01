const connection = require("../services/database")

module.exports = {
  /*----------------------------
  Get all users
  ----------------------------*/
  getUsers : (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * from User`,
        (err, results) => {
          if (err) {
            reject(err)
          }
          resolve(results)
        }
      )
    })
  },
  /*----------------------------
  Create a new user
  ----------------------------*/
  create: (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `insert into User(Name,Email,Password)values(?,?,?)`,
      [data.name, data.email, data.password],
      (err, results) => {
        if (err) {
          reject(err)
        }
        resolve(results)
      }
    )
    })
  },
  /*----------------------------
  Get user by email
  ----------------------------*/
  getUserByEmail:(email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * from User WHERE Email = ?`,
        [email],  
        (err, results) => {
          if (err) {
            reject(err)
          }
          resolve(results[0])
        }
      )
    })
  },
  /*----------------------------
Get user by id
----------------------------*/
getUserById: (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * from User WHERE Id = ?`,
      [id],
      (err, results) => {
        if (err) {
          reject(err)
        }
        resolve(results)
      }
    )
  })
},
/*----------------------------
Update user
----------------------------*/
updateUser: (userId, data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE User set Name=?, Email=?, Password=? where Id = ?`,
      [data.name, data.email, data.password, userId],
      (err, results) => {
        if (err) {
          reject(err)
        }
        resolve(results)
      }
    )
  })
},

/*----------------------------
Delete user
----------------------------*/
deleteUser: (userId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE User set Status=? WHERE Id = ?`,
      ['inactive', userId],
      (err, results) => {
        if (err) {
          reject(err)
        }
        resolve(results)
      }
    )
  })
}
}




