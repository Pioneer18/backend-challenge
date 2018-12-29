/*this file - app.js - is the entry point to connect all files together, add additional functionality, and register static files*/

//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//initialize express
const app = express;

//parse incoming HTTP request bodies to capture submitted physician data
app.use(bodyParser.json());
//allow any data types inside of the parsed request object
app.use(bodyParser.urlencoded({ extended: true }) );

//setup mongoose (enable es6 promises and specify the database name/location)
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/physicians');

//serve the static public directory 
app.use(express.static('public'));