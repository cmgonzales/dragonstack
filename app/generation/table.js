const pool = require('../../databasePool')

class GererationTable{
    storeGeneration(){
        pool.query('INSERT INTO generation(expiration) VALUES()');
    }
}