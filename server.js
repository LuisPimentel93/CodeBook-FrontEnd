// const express = require('express')
// const mongoose = require('mongoose')
// require('dotenv').config()


// // const indexRoute = require('./src/index')

// const app = express()

// //middlewares
// app.use(express.json())


// //routes
// // app.use('/index', indexRoute)
// app.get('/', (req,res) => {
//     res.send('I AM ALIVE!!!!!')
// })
// // db connection

// const PORT = process.env.PORT

// app.listen(PORT, console.log(`listening on port ${PORT}`)) // npx nodemon index.js

// module.exports = app;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
