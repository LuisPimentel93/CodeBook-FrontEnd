const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


// const indexRoute = require('./src/index')

const app = express()

//middlewares
app.use(express.json())


//routes
// app.use('/index', indexRoute)
app.get('/', (req,res) => {
    res.send('I AM ALIVE!!!!!')
})
// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`)) // npx nodemon index.js

