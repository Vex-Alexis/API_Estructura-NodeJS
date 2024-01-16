require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

dbConnect()
app.listen(PORT, () => {
    console.log('API encendida en el puerto: ', PORT);
})