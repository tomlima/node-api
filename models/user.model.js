mongo = require('mongodb')
const db = require("../db")

const userModel = {
  deleteUser: async (id, callback) => {
    try{
      const connection = await db.connection()
      connection.collection("users").deleteOne({_id : new mongo.ObjectId(id)}, (err, result) => {
        if(err) throw new Error(err)
        return callback(null, result)
      })
    }catch(err){
      return callback(err, null)
    }
  },
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
  },
  updateUser: async (id, newData, callback) => {
    try {
      const connection = await db.connection()
      connection.collection("users").updateOne({_id: new mongo.ObjectId(id)}, {$set: newData} , (err, result) => {
        if(err) throw new Error(err)
        return callback(null, result)
      })
    }catch(err){
      return callback(err, null)
    }
  }
}

module.exports = userModel