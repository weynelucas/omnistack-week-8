const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const requireDir = require('require-dir');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Socket
const clients = {}

io.on('connection', socket => {
  const { user } = socket.handshake.query;
  clients[user] = socket.id;
});

app.use((req, res, next) => {
  req.server = io;
  req.clients = clients;

  return next();
});

// Database
mongoose.connect('mongodb://localhost:27017/tindev', { 
  useNewUrlParser: true, 
  useCreateIndex: true 
});
requireDir('./src/models');

// Express
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', require('./src/routes'));

http.listen(3100, '127.0.0.1', () => {
  const url = `http://${http.address().address}:${http.address().port}`;
  console.log(`Starting development server at ${url}`);
});