//Dependencies
const express = require('express');
const mongoose = require('mongoose');

//initialize express
const app = express;

//serve the static public directory 
app.use(express.static('public'));