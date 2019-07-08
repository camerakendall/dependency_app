const { Pool } = require('pg'); //replaces the outdated pg.connect

//Every field of the config object is entirely optional. The config passed to the pool is also passed to every client instance within the pool when the pool creates that client.
const pool = new Pool({ //this creates a pool 
    host: 'localhost',
    // user: 'database-user',
    max: 9, //maximum number of clients the pool should contain (default is set to 10)
    idleTimeoutMillis: 30000, //number of milliseconds a client must sit idle in the pool and not be checked out before it is disconnected from the backend and discarded
    connectionTimeoutMillis: 10000 //number of milliseconds to wait before timing out when connecting a new client (default is 0 which means never)
});


module.exports = pool;
