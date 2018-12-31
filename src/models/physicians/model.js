//assemble the model 
const mongoose = require('mongoose');
const  { schema } = require('./schema');

const Physicians = mongoose.model('Physicians', schema );
module.exports = { Physicians };