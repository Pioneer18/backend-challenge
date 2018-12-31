//determine the node environment for the db to connect
const env = process.env.N0DE_ENV || 'development';
//this will be the entry point
const config = require(`./${env}`);

module.exports = config;
