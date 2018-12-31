//combining the physician schema and model
const mongoose = require('mongoose');
const { schema } = reqire('./schema');

//add hooks here (if necessary)

const Physician = mongoose.model('Physician', schema);
module.exports = { Physician};