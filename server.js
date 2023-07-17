const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

//middlewares
app.use(express.json())


//routes
// app.get('/Home', (req,res) => {
//     res.send()
// })
app.use('/Home')
// db connection

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`)) // npx nodemon index.js

module.exports = app;


