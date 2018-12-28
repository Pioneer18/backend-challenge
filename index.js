//Dependencies
const express = require('express');
const mongoose = require('mongoose');

//initialize express
const app = express;

//setup mongoose (enable es6 promises and specify the database name/location)
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/physicians');

//serve the static public directory 
app.use(express.static('public'));