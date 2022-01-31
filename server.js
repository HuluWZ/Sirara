require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
<<<<<<< HEAD
    useTempFiles: true 
}))
=======
    useTempFiles: true
}));
>>>>>>> e50002c772cb23f7ff89f3161a27ad204a592fab

const PORT = process.env.PORT 

app.listen(PORT, () =>{
    console.log('🚀 Server is running on port', PORT)
})