//This file will register (connect) the app controllers to route endpoitns
//and pass the modles and necessary config to the controllers to handle the 
//request at the endpoints

const config = require('../config');

//import middleware here to attach to router

//import the models
const models = require('./models');

//import physician controller to register to endpoint
const physicians = require('./controllers/physicians');

const routersInit = config => {
    const router = express();

    //register api points (endpoints with controllers)
    //at this reative endpoint, call the physicians controller with access to models and config
    router.use('/physicians', physicians(models, { config }));

    //register middleware here

    return router;
};

module.exports = routersInit;
