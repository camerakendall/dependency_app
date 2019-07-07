const express = require('express'); //use express
const app = express(); //call express "app"
const path = require('path'); //use path for correct directions
const bodyParser = require('body-parser');
const controller = require('./psql-controller.js');

const port = 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// app.use('/static', express.static(path.join(__dirname, 'public')))

//need /build
//need get request for / route on 3000
//process variables (if production get /build. if development )
//if(process.env.NODE_ENV === 'production') { }

//for when in build
app.use('/build', express.static(path.join(__dirname, '../build')))


app.get('/', (req, res) =>{
 // res.send('hello')
   res.sendFile(path.join(__dirname, '../index.html'))
  
})




app.get('/result' , controller.getDeps)
// need to build out endpoint to take the answer array as a body element

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//module.exports = server;