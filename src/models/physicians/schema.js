/**
 * Schema Design
 * embedded facility and county subdocument arrays containing hospital and counties, hospitals contain correlated county id's
 * Assumption: 
 *  1) no need for separate county or faciltiy(location) doucments, physicans contain them
 *  2) Ok to delete Physicains and facility /county subdocuments. 
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Physician = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    //Some doctors may have more than one specialty
    specialty: [ { specialty: String , required: true} ],
    contractStatus: {
        employeed: { type: Boolean, required: true }
    },
    term: {year: Number, months: Number, start: Date, end: Date },
    state:{ type: String, required: true },
    facility: [ { 
        name: {type: String, required: true }, 
        address:{ street: String, city: String, suite:{type: Number, default: null} }, 
        county: { type: String, required: true } //all hospitals in a given county can be queried as well as all physcians in a given county
    } ] 
})

module.exports = { Physicain };