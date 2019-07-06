const { Pool } = require('pg'); //replaces the outdated pg.connect
//do we need a client?

//Every field of the config object is entirely optional. The config passed to the pool is also passed to every client instance within the pool when the pool creates that client.
const pool = new Pool({ //this creates a pool 
    host: 'localhost',
    // user: 'database-user',
    max: 9, //maximum number of clients the pool should contain (default is set to 10)
    idleTimeoutMillis: 30000, //number of milliseconds a client must sit idle in the pool and not be checked out before it is disconnected from the backend and discarded
    connectionTimeoutMillis: 10000, //number of milliseconds to wait before timing out when connecting a new client (default is 0 which means never)
});


//NEEDS TO BE UPDATED ACCORDING TO US
//Acquires a client from the pool. If the pool is 'full' and all clients are currently checked out, this will wait in a FIFO queue until a client becomes available
//
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
