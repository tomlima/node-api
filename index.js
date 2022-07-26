const express = require("express");
const app = express()
app.use(express.json())

var usersRoute = require("./routes/users")
app.use("/users", usersRoute)

app.listen(3000)

