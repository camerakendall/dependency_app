//---------------------------------------------------------------------------------------------------
//
// PSQL-Controller
//
//---------------------------------------------------------------------------------------------------
//
// when the client makes a get request (upon submission of all answers),
// the server passes that request here to the controller
// the controller creates the appropriate query and sends it off to the db to get result
//
//---------------------------------------------------------------------------------------------------
const pool = require('../database/database.js'); //requires our database (which is exported as pool)

const controller = {
    // currently only has one functionality for now, but for modularity's sake we will
    // create our obj and refer to the singular function as a method

    // getDeps method takes req for list of dependencies

    //////////////////////////////////req body vs params

    // reads req.STUFF (which will be an array of strings containing the answers from the questionnaire)
    // creates the appropriate query string
    // queries db (which is our Pool)
    // makes one singular query so we use Pool.query instead of Pool.connect's client.query
    // useful link for understanding queries ----> https://node-postgres.com/features/queries
    getDeps: (req, res) => {
        //We know that the req.body will always be safe because we control how what goes into it
        const listOfTech = (req.body); //ex ["mongo", "mongoose", etc...]
        // ^ should always have length >= 1
        //   even if questions are not mandatory (in order not to overwhelm user if they're not sure about something)
        //   a place should be in check on the front end to avoid making an uncessary request because
        //   client -> server -> controller -> db

        //strinigify and replace double quotes and [ ] appropriately for SQL syntax
        const queryTech = JSON.stringify(listOfTech).replace(/["\[\]]/g, (matched) => {
            if (matched === '"') {return "'"} 
            if (matched === '[') {return "("} 
            if (matched === ']') {return ")"} 
        }); 
        const fullQuery = `SELECT * FROM dependency WHERE technology IN ${queryTech};`; //DON'T FORGET THIS MOFO ;
        pool.query(fullQuery, (err, results) => {
            if (err) {
                console.log("Error querying db for dependencies", err);
                res.status(400).send("Sorry, error querying for your dependencies!")
            }
            else {
                res.status(200).send(results.rows) //returns an array of results
            }
        })
    }
}

module.exports = controller; //exports entire controller ( methods can be referred to as controller.getDeps )