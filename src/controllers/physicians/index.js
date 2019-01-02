//Routes for CRUD ops on the Physician model
const { Router: router } = require('express');
//add middleware(permission levels, etc. here)
//require all the subfiles for handling requests
const { create } = require('./create');
const { remove } = require('./remove');
const { get } = require('./get');
const { update } = require('./update');
const { list } = require('./list');
const { filtered } = require('./filtered');
const { facilityByCounty } = require('./facilityByCounty');


//each route will have the models passed in as well as the config for config
module.exports = (models, { config }) => {
    const api = router();

    //on route api/v1/physicians call the list.js controller to list all physicians
    api.get('/', list(models, { config }));

    //on route api/v1/filtered call the filtered.js controller to list all physician filtered by user input
    api.get('/filtered', filtered(models, { config }));

    //on route api/v1/facilityByCounty call the facilityByCounty.js controller to find all facility locations in a selected county
    api.get('/facilityByCounty', facilityByCounty(models, { config }));

    //on route api/v1/physicians/get call the get.js controller to retrieve specified physician(s)
    api.get('/:_id', get(models, { config }));

    //on route api/v1/physicians/create call the create.js controller to add a new physician to the db
    api.post('/', create(models, { config }));

    //on route api/v1/physicians/update call the update.js controller to update the info on a physician(s) in the db
    api.put('/:_id', update(models, { config }));

    //on route api/v1/physicians/remove call the remove.js controller to delete a physician from the d
    api.delete('/:_id', remove(models, { config }));



    //this is now a function to return a route using the list.js physicians controller file
    return api;
}