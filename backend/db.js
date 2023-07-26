const mongoose = require('mongoose')
const colors= require('colors')
const dotenv = require('dotenv')

dotenv.config({path : __dirname + '/.env'})

async function connectDB() {
 const conn=  await mongoose.connect(process.env.MONGO_URI)
 console.log(`Successfully connected to database : ${conn.connection.host}`.cyan.underline)
}
module.exports= connectDB