mongo = require('mongodb')
const db = require("../db")

const userModel = {
  deleteUser: async (id, callback) => {
    try{
      const connection = await db.connection()
      const result = await connection.collection("users").deleteOne({_id : new mongo.ObjectId(id)})
      return callback(null, result)
    }catch(err){
      return callback(err, null)
    }
  },
  getUsers: async (callback) => {
    try{
      const connection = await db.connection()
      const result = await connection.collection("users").find().toArray()
      return callback(null,result)
    }catch(err){
      return callback(err,null)
    }
  },
  getUser: async (id, callback) => {
    try {
      const connection = await db.connection()
      const result = await connection.collection("users").findOne({_id : new mongo.ObjectId(id)})
      return callback(null, result)
    }catch(err){
      return callback(err, null)
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
      const result = await connection.collection("users").updateOne({_id: new mongo.ObjectId(id)}, {$set: newData})
      return callback(null, result)
    }catch(err){
      return callback(err, null)
    }
  }
}

module.exports = userModel