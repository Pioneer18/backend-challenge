
const mongooseInit = (config) => {
    const mongoose = require('mongoose');

    //setup mongoose (enable es6 promises and specify the database name/location)
    mongoose.Promise = Promise;
    mongoose.connect(config.db, { useNewUrlParser: true });

    //mongoose connection event handlers
    mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.db}`);
    });
    mongoose.connection.on('connected', () => {
    console.log(`Connected to database: ${config.db}`);
    });

    if (config.env === 'development') {
    mongoose.set('debug', true); //enable logging collection methods + arguments to the console
    }
}

module.exports = mongooseInit;