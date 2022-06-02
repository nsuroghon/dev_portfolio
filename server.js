const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv'). config();
const {errorHandler} = require('./middleware/errorMiddleware')
const path = require('path')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000;
const routes = require('./routes')

const app = express();
// make uploads static/publicly available
// app.use(express.static(__dirname + "uploads"))

app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req,res) => {
    res.status(200).json('This is the root of my express application')
})

// connect to database
connectDB();

// routes
// app.use('/api/data', require('./routes'))
app.use(routes)

app.use(errorHandler)

app.listen(PORT,() => console.log(`server started on ${PORT}`))