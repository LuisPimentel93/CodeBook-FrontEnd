const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

//middlewares
app.use(express.json())


// //routes
// app.use('/index', require('./src/index'))

app.get('/', (req,res) => {
    res.send('hello')
})

// db connection

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`)) // npx nodemon index.js

module.exports = app;


