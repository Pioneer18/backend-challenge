//setup the express and the express middleware
express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse incoming HTTP request bodies to capture submitted physician data
app.use(bodyParser.json());
//allow any data types inside of the parsed request object
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;
