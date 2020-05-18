const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// Import Routes
const authRoute = require('./routes/auth')
const testRoute = require('./routes/testPosts')

// Connect to the DB
const uri = process.env.DB_CONNECT

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection

connection.once('open', () => {
    console.log('Connected to DB')
})

app.use(express.json())

app.use('/api/user', authRoute)
app.use('/api/testPosts', testRoute)

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
})