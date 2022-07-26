const {MongoClient} = require("mongodb")
require('dotenv').config()


const database = {
  connection: async () => {
    const conn = await MongoClient.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    const client = conn.db(process.env.DB_NAME)
    if(!conn) return new Error("Cant connect")
    return client
  }
}


module.exports = database