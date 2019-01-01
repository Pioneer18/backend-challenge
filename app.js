/*this file - app.js - is the entry point to connect all files together, add additional functionality, and register static files*/
//config
const app = require('./config/express');
const config = require('./config/env/');
const mongoose = require('mongoose');
const api = require('./src/api/index');

//temporairly setting up express-basic-auth on the main entry point
const basicAuth = require('express-basic-auth');
//check incoming requests to match the below credentials ( admin:supersecret )
app.use(basicAuth({
  users: { 
    'admin': 'supersecret', //admin can use all CRUD ops
    'guest': 'justlookin'   //guest can read only
  }
}))

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

//api routes v1; register the src/api/index.js router and its relative routes (/physician, /test) 
//serve the static public directory 
app.use(express.static('public'));
app.use('/api/v1', api(config));

app.listen(config.port, () => {
  console.log(`api listening on port ${config.port} ${config.env}`);
})