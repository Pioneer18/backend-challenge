/** 
  * This file registers the api controllers to route endpoints
  * The Physician models and the config directory are imported and passed to the controller
  * The Physician controller has an individual file to handle the request at each available api endpoint
  * This file structure allows for more routes and functionality to be easily added to the api
*/

//import express for routing
const express = require('express');

//import basic auth middleware to apply to the Physician DB routes, only authorized admin can perform CRUD ops
const { Authentication } = require('../middleware/basic-auth');

//import the Physician model
const { Physicians } = require('../models/physicians');

//import list of controllers (controllers are lowercased)
const physicians = require('../controllers/physicians');

//combine all models to pass to the controllers
models = { Physicians };




/** 
*----------------------------------- API Routes for Physician Controller------------------------------------------------------
//DOCUMENTATION

GET /api/v1/physicians - list.js
@ Authorization baisc
Returns: all physician documents in the collection
query: find() 


GET /api/v1/filtered
@authorization basic
Returns: all Physician documents matching one or more of the search conditions
query: find({ $or[{ ...search conditions... }] })

GET /api/v1/facilityByCounty - facilityByConty.js
@authorization basic
Returns: all facility locations in the selected county
query: find({ county }).select( facility.name, )

GET /api/v1/physicians/:_id - get.js
@authorization basic
Returns: finds Physician document by _id

POST /api/v1/physicians/ - create.js
@authorization basic
returns: a new physician document
[CAUTION: all fields required]
param 
    firstName (require) - {String}
    lastName (require) - {String}
    specialty (require) - {String}
    term (require) - {String}
    state (require) - {String}
    facility (require) - [{ name: String , address: {String, String, Number}, county: (require) - {String} }]


PUT /api/v1/physicians/:_id - update.js
@authorization basic
returns: _id selected user document is updated with the new physician path values that the user inputed
query: findOneAndUpdate(_id, {...all physician fields...}) 
[CAUTION: front end should open document to be edited and leave all physician fields the same until user changes them, changed fields will be reflected in the updated document] 
@param
    firstName - {String}
    lastName - {String}
    specialty - {String}
    term - {String}
    state - {String}
    facility - [{ name: String , address: {String, String, Number}, county: (require) - {String} }]


DELETE /api/v1/physicians/ - remove.js
@authorization basic
Returns: deletes an _id selected Physician document    


*/








const routersInit = config => {
    const router = express();

    //register api points (endpoints with controllers)
    //at this reative endpoint, call the physicians controller with access to model and the config passed from app.js
    router.use('/physicians', Authentication, physicians(models, { config }));

    router.use('/test', (req, res) => { res.send('you have accessed the api routes') });

    //register middleware here

    return router;
};

module.exports = routersInit;
