//Test that the mongoose Physician Model cannot be created with any empty Schema Path values

//import chai for easy assertions
const expect = require('chai').expect;
//import the physician model to validate
const  { Physicians }  = require('../src/models/physicians');

//run test with Mocha and chai
describe('Physcian Model Validation', (done) => {
    const p = new Physicians({});

    p.validate( err => {
        expect(err.errors.Physicians).to.exist; //Physician.save() with no required paths
        done();
    })
})