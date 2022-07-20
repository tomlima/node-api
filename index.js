const express = require("express");
const app = express()
app.use(express.json())

var userRoute = require("./routes/user")
app.use("/user", userRoute)

app.listen(3000)

