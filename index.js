const PORT = 3000;
const express = require('express');
const server = express();
const apiRouter = require('./api');
const morgan = require('morgan');
const { client } = require('./db')

client.connect();


server.use(morgan('dev'));
server.use(express.json());

server.use('/api', apiRouter);

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});