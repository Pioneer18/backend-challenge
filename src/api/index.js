//This file will register (connect) the app controllers to route endpoitns
//and pass the modles and necessary config to the controllers to handle the 
//request at the endpoints

const express = require('express');


//import middleware here to attach to router

//import models; auth and physicians (models are capitalized)
const { Physicians } = require('../models/physicians');

//import list of controllers (controllers are lowercased)
const physicians = require('../controllers/physicians');

//combine all models to pass to the controllers
models = { Physicians };


const routersInit = config => {
    const router = express();

    //register api points (endpoints with controllers)
    //at this reative endpoint, call the physicians controller with access to models and config
    //router.use('/physicians', physicians(models, { config }));

    router.use('/test', () => { res.send('Hello World') });

    //register middleware here

    return router;
};

module.exports = routersInit;
