//setup the express Router
const { Router: router } = require('express');
//add middleware(permission levels, etc. here)
//require all the subfiles for handling requests
const create = require('./create');
const remove = require('./remove');
const get = require('./get');
const update = require('./update');
const { list } = require('./list');

/*place documentaion about controllers here*/

//each route will have the models passed in as well as the config for config
module.exports = ( models) => {
    const api = router();

    //on route api/v1/physicians call the list.js controller to list all physicians
    api.get('/')
}