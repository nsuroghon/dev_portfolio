const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv'). config();
const {errorHandler} = require('./middleware/errorMiddleware')
const path = require('path')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000;
const routes = require('./routes')

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
  }));

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

// serve front end
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use(errorHandler)

app.listen(PORT,() => console.log(`server started on ${PORT}`))