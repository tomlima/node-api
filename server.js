const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')
const authRouter = require('./router/auth')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.listen(3000, () => {
  console.log('Server up at port 3000 🦫​')
})
