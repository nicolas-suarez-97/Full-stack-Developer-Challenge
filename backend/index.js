const express = require('express');
const cors = require('cors');
const client = require('./config/db');

try {
    client.connect();
    let dropTable = 'DROP TABLE location';
    client.query(dropTable, (err, res) => {});

    dropTable = 'DROP TABLE internal';
    client.query(dropTable, (err, res) => {});

    let creationQuery = 'CREATE TABLE location (id varchar(50) PRIMARY KEY, name varchar(50), area int, parentId varchar(50), parentName varchar(50));';
    client.query(creationQuery, (err, res) => {});

    creationQuery = 'CREATE TABLE internal (parentId varchar(50) PRIMARY KEY, internalId varchar(50));';
    client.query(creationQuery, (err, res) => {});

    let insert = 'INSERT INTO location (id, name, area, parentId, parentName) VALUES (\'1\',\'Parque\',50, \'2\',\'Centro comercial\')';
    client.query(insert, (err, res) => {});
    insert = 'INSERT INTO location (id, name, area) VALUES (\'2\',\'Centro comercial\',100)';
    client.query(insert, (err, res) => {});
    // client.query(createTable);
} catch (error) {
    console.log(error);
}


// Crear Servidor
const app = express();
app.use(cors());
app.use(express.json({extended:true}));
app.use( function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const PORT = process.env.PORT || 4000;

app.use('/api/location',require('./routes/location'));

app.listen(PORT, ()=>{
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});