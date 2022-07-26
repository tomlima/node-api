const express = require("express");
const app = express()
app.use(express.json())

var usersRoute = require("./routes/users")
app.use("/api/users", usersRoute)

module.exports = app

