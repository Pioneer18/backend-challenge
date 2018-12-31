/*this file - app.js - is the entry point to connect all files together, add additional functionality, and register static files*/
//config
const app = require('./config/express');
const config = require('./config/env/');
const mongoose = require('mongoose');

//setup mongoose (enable es6 promises and specify the database name/location)
mongoose.Promise = Promise;
mongoose.connect(config.db,{useNewUrlParser: true});

//routing, use the api directory as middleware 

app.listen(config.port, ()=>{
    console.log(`api listening on port ${config.port} ${config.env}`);
})