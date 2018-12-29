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
    specialty:{
        type: [String], //Some doctors may have more than one specialty
        default: undefined
    },
    contractStatus: {
        
    }
    
})