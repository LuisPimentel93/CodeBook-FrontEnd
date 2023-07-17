import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const app = express()
const appSrc = require('./src/App')

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.use('./App', appSrc)
// app.get('/', (req,res) => {
//     res.render('')
// })

// db connection


const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`)) // npx nodemon index.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

