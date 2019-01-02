/**
 * this file - app.js - is the entry point to import and synchronize all of the api directories and files 
 * this file registers the api routes to the endpoint /api/v1/ to preserve the current code incase of a hypothetical v2
 * the server is serving a index.html file that has documentation on each of the available routes for the api
 * route documentation is also available in the src/api/index.js file
 * */
//config
const app = require('./config/express');
const config = require('./config/env/');
const api = require('./src/api/index');
const mongoManager = require('./src/mongo/mongoose');

//initialize the mongoManager 
mongoManager(config);

//api routes v1; register the src/api/index.js router and its relative routes (/physician, /test) 
//serve the static public directory 
app.use(express.static('public'));
app.use('/api/v1', api(config));

app.listen(config.port, () => {
  console.log(`api listening on port ${config.port} ${config.env}`);
})