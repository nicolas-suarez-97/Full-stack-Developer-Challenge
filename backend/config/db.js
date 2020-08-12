const {Pool, Client} = require('pg');
const connectionString = 'postgresql://app_user:app_password@localhost:5432/postgresDB';

const client = new Client({
    connectionString:connectionString
});

module.exports = client;
