const express = require('express')
const app = express()
const routerUser = require('./userRoute')
const connectDB = require('./db')
require('dotenv').config()

app.use(express.json())

port = process.env.PORT || 3000

app.use('/api/v1/', routerUser)

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Your server is alive on : http://localhost:${port}`))
    }catch(error){
        console.log(error);
    }
}


start()