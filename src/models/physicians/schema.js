const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const physician = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    specialty: {
        type: [String], //Some doctors may have more than one specialty
        default: undefined
    },
    //It may be easier to query doctors 
    state:{ type: String, required: true }, 
    contractStatus: {
        employeed: {
            type: Boolean,
            required: true //if false the following should be undefined 
        },
        hospitalGroup: {
            type: String,
            default: null,
        },
        //given a physician is employeed, they must have a facility (location) of work
        facitlity: {
            name: { type: String, required: true },
            address: [{
                street: { type: String, required: true },
                suiteNum: { type: Number, default: null },
                buildingNum: { type: Number, default: null },
                city:{ type: String, required: true },
                state:{ type: String, required: true },
                zip: { type: Number, required: true}
           }]
        }

    }
})