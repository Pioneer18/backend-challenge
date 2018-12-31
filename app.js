/*this file - app.js - is the entry point to connect all files together, add additional functionality, and register static files*/
//initialize express
const app = require('./config/express');
const mongoose = require('mongoose');
//setup mongoose (enable es6 promises and specify the database name/location)
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/physicians');

//routing, use the api directory as middleware 

//listen to port
let PORT = 3000;

app.listen(PORT, ()=>{
    console.log("app listening on port 3000");
})