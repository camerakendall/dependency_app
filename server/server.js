const express = require('express'); //use express
const app = express(); //call express "app"
const path = require('path'); //use path for correct directions
const bodyParser = require('body-parser');
const controller = require('./psql-controller.js');
const server = app.listen(8080);

// app.get()


// server.listen(8080, () => { //PROBABLY NEEDS TO CHANGE A BIT
//     console.log('listening at http://localhost:8080');
// });

module.exports = server;