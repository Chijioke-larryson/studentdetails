 import express from 'express'
 import cors from 'cors'
 import dotenv from 'dotenv'
 import bodyParser from 'body-parser'
import studentRoute from './routes/student.js'


 dotenv.config()

 const app = express()
 const PORT = 3000

 const corsOptions ={
    origin: '*'
 }

 app.use(cors(corsOptions))


 app.use(bodyParser.json())

 app.get("/", (req, res ) => {
    res.send("Hello World")

 })

 app.use("/api/student", studentRoute)
 app.listen( PORT, ( ) => {
    console.log("Listening on Port ${PORT}")
 }
    
 )