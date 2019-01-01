//users for authentication 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: String,
    password: String
})

module.exports = { schema };