const db = require("../db")

const userModel = {
  getUsers: async (callback) => {
    try{
      const connection = await db.connection()
      const users = await connection.collection("users").find().toArray()
      return callback(null,users)
    }catch(err){
      return callback(err,null)
    }
  },
  insertUser: async (user,callback) => {
    try{
      const connection = await db.connection()
      const result = await connection.collection("users").insertOne(user)
      return callback(null,result)
    }catch(err){
      return callback(err, null)
    }
  }
}

module.exports = userModel