const pool = require('../database/database.js'); //requires our database (which is exported as pool)
const list = require('./ourList.js');
// --------------------------------------
// Schema ✉
// --------------------------------------
// _id SERIALKEY  // DEFAULT
//  technology VARCHAR //string
//  dependencies text [] //text array
//  docs text [] //text array
//  notes text [] // text array
// -----------------------------------------
function dropDB(){
  pool.query('DROP TABLE dependency;', (err) => {
    console.log('Table dependency dropped')
  })
}
function createDB(){
// -----------------------------------------
// CREATE THE DATABASE IF IT DOES NOT ALREADY EXIST ⛑
// -----------------------------------------
  const createDepend = `CREATE TABLE IF NOT EXISTS dependency ("_id" SERIAL PRIMARY KEY,"technology" VARCHAR,"dependencies" TEXT [],"docs" TEXT [],"notes" TEXT []);`
 
  pool.query(createDepend, (err, result)=>{
    if (err) {
      return console.error('Error', err.stack)
    }else{
      console.log("made table")
      // console.log(result)
    }
  })
}
async function seedDB(){
  // const dropped = await dropDB();
  // console.log(dropped)
  const exists = await pool.query('SELECT EXISTS(SELECT * FROM dependency)');
  console.log("dependency exists: ", exists.rows[0].exists)
  createDB()
  let insertQuery= 'INSERT INTO dependency VALUES '
  // BUILD THE QUERY STRING ⛏
  // ⛏the variable insertQuery will initially be 'INSERT INTO dependency VALUES'
  // ⛏then little by little(on each iteration) we will add to this string

  //1) ITERATE OVER SEED DATA 🏃🏃🏃🏃🏃🏃
  // console.log("list", list)
  list.forEach((listItem) => {
  //2) 🏃for each item in our seed array, extract the keys.(Using Destructuring)🏃
  const { technology, dependencies, docs, notes } = listItem;
  //3) Now we can concatenate the values (of the Keys we've just extracted) with our query string to make... 
  // insertQuery += `(DEFAULT, '${technology}', '[${dependencies}]', '[${docs}]', '[${notes}]'), ` 
  insertQuery += `(DEFAULT, '${technology}', '{"hey"}'), ` 
  // A BIG ASS RAW SQL QUERY STRING called 'insertQuery'
  // -----------------------------------------
  //But now that we've finished concatenating, instead of a comma we want to end our SQL query with a semicolon.
  //-----------------------------------------    
  })
  insertQuery = `${insertQuery.slice(0, insertQuery.length - 2)};`;
  console.log(insertQuery)

  //--------------------------------------------------------------------------------------------------
  //FINALLY we insert our data by using our Big ass raw sql query
  pool.query(insertQuery, (err,result)=> {
    if(err){
      return console.error('Error populating db', err.stack)
    }
    else{
        console.log(result)
        console.log("'Dependency information inserted'");
    }
  })
}
 

<<<<<<< HEAD
module.exports = seedDB 
=======
module.exports= {
  seedDB, dropDB
}
>>>>>>> 3e08162e7af370e8a792af79a371ae97afdfaf30
