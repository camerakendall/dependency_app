const express = require('express'); //use express
const app = express(); //call express "app"
const path = require('path'); //use path for correct directions
const bodyParser = require('body-parser');
const controller = require('./psql-controller.js');
const port = 3000
const pg = require('pg');
const databaseSeed = require('../database/seed.js')



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

//need /build
//need get request for / route on 3000
//process variables (if production get /build. if development )
//if(process.env.NODE_ENV === 'production') { }

//for when in build
app.use('/build', express.static(path.join(__dirname, '../build')))

// if(process.env.NODE_ENV === 'production'){}

//! Unhandled promise rejection error with this code
// app.get('/', (req, res) =>

// res.sendFile(path.join(__dirname, '../index.html'))
// )

//! Header error with this code
app.get('/', (req, res, databaseSeed) =>{
   databaseSeed.seedDB()
  .then(function (res) {
    
    res.sendFile(path.join(__dirname, '../index.html'))

  })
  .catch(function (err) {
    if (err) {
      res.sendStatus(500)
    }
  })
  })


//Need this for querying after hitting submit button.
// app.get('/result' , controller.getDeps)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;