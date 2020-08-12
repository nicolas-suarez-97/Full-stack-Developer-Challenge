const expect = require('chai').expect;
const request = require('supertest');

// const app = require('../../../routes/location');
const app = require('../../../index');
const conn = require('../../../config/db');

describe('POST / Location',()=> {

   
    it('OK, Creating a new Location', (done)=> {
        request(app).post('/api/location')
        .send({name:'Locación', area: 50})
        .then((res)=> {
            const body = res.body;
            expect(body).to.contain.property('msg');
            expect(body).to.contain.property('estado');
            done();
        })
    });
});