const express = require("express");
const app = express()
app.use(express.json())

var usersRoute = require("./routes/user")
app.use("/api/user", usersRoute)

module.exports = app

app.listen(3000, () => {
  console.log("Server up at port 3000 🦫​");
})  