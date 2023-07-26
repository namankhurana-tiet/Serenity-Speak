const express = require('express')
const dotenv= require('dotenv')
const connectDB= require('./db')
const colors= require('colors')
const app = express()
const {notfound, errorHandler} = require('./middlewares/errorMiddleware')
dotenv.config()
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server started on PORT ${PORT}`.yellow.bold))

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).send('Server Running Successfully');
}) 

const chatsrouter= require('./Routes/chats.js')
app.use('/api/chat', chatsrouter)

const userRouter= require('./Routes/user.js')
app.use('/api/user', userRouter )

app.use(notfound)
app.use(errorHandler)
// app.get('/:id', (req, res)=>{
//    res.redirect(301, '/')
// })
