const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const requireDir = require('require-dir');


const app = express();

mongoose.connect('mongodb://localhost:27017/tindev', { 
  useNewUrlParser: true, 
  useCreateIndex: true 
});
requireDir('./src/models');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', require('./src/routes'));

const server = app.listen(3100, '127.0.0.1', () => {
  console.log(`Starting development server at http://${server.address().address}:${server.address().port}`);
});