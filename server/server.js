const express = require('express'); //use express
const app = express(); //call express "app"
const path = require('path'); //use path for correct directions
const bodyParser = require('body-parser');
const controller = require('./psql-controller.js');
const server = app.listen(3000);
const port = 3000

//app.use
// app.use('/static', express.static(path.join(__dirname, 'public')))

//need /build
//need get request for / route on 3000
//process variables (if production get /build. if development )


app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, './test.html'));
  

})

// app.get('/result' , controller.getDeps)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//module.exports = server;