const express = require('express'); //use express
const app = express(); //call express "app"
const path = require('path'); //use path for correct directions
const bodyParser = require('body-parser');
const controller = require('./psql-controller.js');
const seeder = require('../database/seed.js');

const port = 3000
const pg = require('pg');




app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

if(process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')))
}

//! Header error with this code
app.get('/', (req, res, databaseSeed) =>{
   seeder.seedDB()
  .then(function (res) {
    
    res.sendFile(path.join(__dirname, '../index.html'))
  }
  )})

app.get('/', function (req, res) {
  seeder.seedDB();
  res.sendFile(path.join(__dirname, '../index.html'))
})


//Need this for querying after hitting submit button.
// app.get('/result' , controller.getDeps)
app.get('/result' , controller.getDeps)
// need to build out endpoint to take the answer array as a body element

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
