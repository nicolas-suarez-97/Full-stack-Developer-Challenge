const client = require('../config/db');
const {v4: uuidv4} = require('uuid');
const { validationResult } = require('express-validator');

exports.createLocation = async (req, res) => {
    // Errores
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json({errores:errors.array()});
    }
    
    try {
        const id = uuidv4();
        const { name, area, parentId, parentName } = req.body;
        const query = {
            text: 'INSERT INTO location (id, name, area, parentId, parentName) VALUES ($1,$2,$3,$4,$5)',
            values:[id,name, area, parentId, parentName]
        }
        client.query(query, (err, r) => {
            res.json({msg: 'Locación creada', estado: 'ok'});
        });    
    } catch (error) {
        console.log(error);
    }
}

exports.getLocationById = async (req, res) => {
    try {
        const id = req.params.id;
        const query = {
            text: 'SELECT * FROM location WHERE id=$1',
            values:[id]
        }
        client.query(query, (err, r) => {
            const result = r.rows;
            res.json({result});
        });    
    } catch (error) {
        console.log(error);
    }
}

exports.getLocations = async (req, res) => {
    const query = 'SELECT * FROM location';
    try {
        client.query(query, (err, r) => {
            const result = r.rows;
            console.log(result);
            res.status(200).json({result});
        });
    } catch (error) {
        console.log(error);
    }
}

exports.updateLocation = async (req, res) => {
    // Errores
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json({errores:errors.array()});
    }
    try {
        const id = req.params.id;
        const { name, area, parentId, parentName } = req.body;
        const query = {
            text: 'UPDATE location SET name=$2, area=$3, parentId=$4, parentName=$5 WHERE id=$1',
            values:[id, name, area,parentId, parentName]
        }
        client.query(query, (err, r) => {
            console.log(r);
            res.json({msg:'Actualización realizada'});
        });    
    } catch (error) {
        console.log(error);
    }
}

exports.deleteLocation = async (req, res) => {
    try {
        const id = req.params.id;
        const query = {
            text: 'DELETE FROM location WHERE id=$1',
            values:[id]
        }
        client.query(query, (err, r) => {
            res.json({msg: 'Locación eliminada'});
        });    
    } catch (error) {
        console.log(error);
    }
}