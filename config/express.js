//setup the express and the express middleware
express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse incoming HTTP request bodies to capture submitted physician data
app.use(bodyParser.json());
//allow any data types inside of the parsed request object
app.use(bodyParser.urlencoded({ extended: true }) );

//serve the static public directory 
app.use(express.static('public'));

module.exports = app;
