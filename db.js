const {MongoClient} = require("mongodb")

const database = {
  connection: async () => {
    const conn = await MongoClient.connect("mongodb://localhost:27017/apiDB")
    const client = conn.db("apiDB")
    if(!conn) return new Error("Cant connect")
    return client
  }
}


module.exports = database