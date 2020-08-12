const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../index');
const conn = require('../../../config/db');

describe('Get / Locations',()=> {

    
    it('OK, Getting all Locations', (done)=> {
        request(app).get('/api/location')
        .then((res)=>{
            expect(res.status).to.equal(200);
            done();
        });
    });

    it('OK, Getting one Location', (done)=> {
        request(app).get('/api/location/1')
        .then((res)=>{
            const body = res.body.result[0];
            expect(res.status).to.equal(200);
            expect(body).to.contain.property('id');
            expect(body).to.contain.property('name');
            expect(body).to.contain.property('area');
            expect(body).to.contain.property('parentid');
            done();
        });
    });

});





        // it('OK, Creating a new Location', (done)=> {
        //     request(app).post('/api/location')
        //     .send({name:'Locación', area: 50})
        //     .then((res)=> {
        //         console.log(res.body);
        //         const body = res.body;
        //         expect(body).to.contain.property('msg');
        //         expect(body).to.contain.property('estado');
        //         done();
        //     })
        // });