/*this file - app.js - is the entry point to connect all files together, add additional functionality, and register static files*/
//config
const app = require('./config/express');
const config = require('./config/env/');
const mongoose = require('mongoose');
const api = require('./src/api/index');

//setup mongoose (enable es6 promises and specify the database name/location)
mongoose.Promise = Promise;
mongoose.connect(config.db,{useNewUrlParser: true});

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
app.use('/ap/v1', api(config));
/*app.use('/', (req, res)=> {
  res.send('Welcome Friends');
})*/

app.listen(config.port, ()=>{
    console.log(`api listening on port ${config.port} ${config.env}`);
})