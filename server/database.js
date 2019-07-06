const { Pool } = require('pg'); //replaces the outdated pg.connect
//do we need a client?

const pool = new Pool({ //this creates a pool 
    host: 'localhost',
    // user: 'database-user',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});


//NEEDS TO BE UPDATED ACCORDING TO US
pool.connect().then(client => {
    return client.query('SELECT * FROM users WHERE id = $1', [1]) //TO BE CHANGED, RIGHT NOW, this is saying select all from db where id =1
        .then(res => {
            client.release()
        })
        .catch(err => {
            client.release(); //points to the releaseCallback when finished with client, important - without this, further calls will timeout
            console.log(err.stack)
        })
})

module.exports = pool;
