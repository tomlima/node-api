import express from 'express'
import cors from 'cors'
import userRouter from './router/user.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)

app.listen(3000, () => {
  console.log("Server up at port 3000 🦫​");
})  