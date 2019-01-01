//assemble the model 
const mongoose = require('mongoose');
const  { schema } = require('./schema');

const Auth = mongoose.model('Auth', schema );
module.exports = { Auth };