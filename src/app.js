const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

//Home route
app.get('/', (req, res) => {
  res.send('Hello There World!');
})

module.exports = app;