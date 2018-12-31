//setup the express Router
const { Router: router } = require('express');
//add middleware(permission levels, etc. here)
//require all the subfiles for handling requests
const { create } = require('./create');
const { remove } = require('./remove');
const { get } = require('./get');
const { update } = require('./update');
const { list } = require('./list');

/*place documentaion about controllers here*/

//each route will have the models passed in as well as the config for config
module.exports = (models, { config }) => {
    const api = router();

    //on route api/v1/physicians call the list.js controller to list all physicians
    api.get('/', list(models, { config }));
    //on route api/v1/physicians/get call the get.js controller to retrieve specified physician(s)
    api.get('/get', get(models, { config }));
    //on route api/v1/physicians/create call the create.js controller to add a new physician to the db
    api.get('/create', create(models, { config }));
    //on route api/v1/physicians/update call the update.js controller to update the info on a physician(s) in the db
    api.get('/update', update(models, { config }));
    //on route api/v1/physicians/remove call the remove.js controller to delete a physician from the d
    api.get('/remove', remove(models, { config }));


    //this is now a function to return a route using the list.js physicians controller file
    return api;
}