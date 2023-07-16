const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
// const cors = require('cors')

// const indexRoute = require('./src/index')

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
// app.use('/index', indexRoute)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`)) // npx nodemon index.js

module.exports = app;