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
    specialty: {
        type: [String], //Some doctors may have more than one specialty
        default: undefined
    },
    contractStatus: {
        employeed: {
            type: Boolean,
            required: true //if false the following should be undefined 
        },
        hospitalGroup: {
            type: String,
            default: null,
        }
    },
    location:{
        county:String,
        state: String,
        city: string,
        //physicians may work at more than one facility
        facility:[
            {
                id: Schema.Types.ObjectId,
                name:String, 
                address:{street:String, city:String, state: String, zip: Number}
            }
        ]
    }
})