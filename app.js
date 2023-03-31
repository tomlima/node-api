const express = require("express");
const app = express()
app.use(express.json())

var usersRoute = require("./routes/user")
app.use("/api/user", usersRoute)

module.exports = app

