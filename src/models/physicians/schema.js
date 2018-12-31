/**
 * Schema Design
 * embedded facility and county subdocument arrays containing hospital and counties, hospitals contain correlated county id's
 * Assumptions: 
 *  1) no need for separate county or faciltiy(location) documents, physicans contain them as sub documents
 *  2) Ok to delete Physicains and facility /county subdocuments; all counties & hospitals related to our collection of physicians will be represented
 *  3) facilities or counties not found in a query indicate our collection currently does not have a physician representing that location
 *  4) by embedding the counties in the facility subdocument, the effect of counties 'having multiple hospitals and hospitals having multiple physicians' is achieved
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const physiciansSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    //Some doctors may have more than one specialty
    specialty: [{ specialty: String, required: true }],
    contractStatus: {
        employeed: { type: Boolean, required: true }
    },
    term: { year: Number, months: Number, start: Date, end: Date },
    state: { type: String, required: true },
    facility: [{
        name: { type: String, required: true },
        address: { street: String, city: String, suite: { type: Number, default: null } },
        county: { type: String, required: true } //all hospitals in a given county can be queried as well as all physcians in a given county
    }]
})

module.exports = mongoose.model('physicians', physiciansSchema )