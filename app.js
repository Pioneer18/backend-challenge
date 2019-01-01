/*this file - app.js - is the entry point to connect all files together, add additional functionality, and register static files*/
//config
const app = require('./config/express');
const config = require('./config/env/');
const api = require('./src/api/index');
const mongoManager = require('./src/mongo/mongoose');

//initialize mongoManager
mongoManager(config);

//api routes v1; register the src/api/index.js router and its relative routes (/physician, /test) 
//serve the static public directory 
app.use(express.static('public'));
app.use('/api/v1', api(config));

app.listen(config.port, () => {
  console.log(`api listening on port ${config.port} ${config.env}`);
})