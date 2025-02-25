import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import MongoConnection from './config/db.js'
import UserRouter from './Router/user.router.js'
const app = express()
app.use(cors())
app.use(express.json())

app.get('/health',(req,res)=>{
    res.send({message : "All good here"})
})

app.use('/api',UserRouter)


app.listen(process.env.PORT,async()=>{
    try {
        await MongoConnection()
    console.log(`app is listening on the port : ${process.env.PORT}`)
    } catch (error) {
        console.log('Error in connecting to port')
    }
})