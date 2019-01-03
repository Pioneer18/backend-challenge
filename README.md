# backend-challenge
The back-end of an application to group all the physicians in Tampa


***Note: JSON file of Physician Collection is included in files @ 'backend-challenge/PhysicianCollection.json'***


#REQUIREMENTS
* A Physician can have multiple inputs: Name, last name, state, specialty, contract status, facility(location) and term length. 
* The counties have multiple hospitals. Each hospital has multiple Physicians.
* Assume that it only applies to Tampa, FL.
* Assume that Carnahan Groups is the owner of this application, so there are no external users or third parties involved.
* Use any kind of authentication (basic, Oath, etc).


#SOLUTION
- API Routes allow user to create new Physcian Documents, 
- get all documents, 
- get all documents meeting one or more of user search conditions,
- get all documents containing a selected county name and return related facility location names,
- get a specific document by id (e.g. click on the link to open a id selected document)
- get and update a specific document by id (e.g. click on a documnent and update any updated paths in the document),
- delete a document selected by id (e.g. click on document link and delete it),
- post a new document with inputed physcian data,
- all CRUD op routes are basic auth protected by userName: admin passWord: carnahangroup


#TESTING
-Mocha is used to run javascript Unit Testing 
-Chai is used for easy assertions
-Sinon is imported for stubs.
-NOTE: there is a physicianModel.js test file, however the routes have only been informally tested on Postman

#IMPROVEMENTS
-Testing with Mocha needs to be added for the CRUD Routes,
-only the built-in MongoDB model validator required is being tested. 
-Morgan or Winston logging could be added for more verbose error logging.
-routes could be consolidated with express routes string patterns allowing a single http method endpoint to service multiple operations
more advance mongodb querying can be added to achieve strict filtering 



#API ROUTES DOCUMENTATION

**GET /api/v1/physicians** - list.js
-@ Authorization baisc -
-Returns: all physician documents in the collection
-query: find() 


**GET /api/v1/physicians/filtered** - filtered.js
-@authorization basic -
-Returns: all Physician documents matching one or more of the search conditions
-query: find({ $or[{ ...search conditions... }] })


**GET /api/v1/physicians/facilityByCounty** - facilityByConty.js
-@authorization basic -
-Returns: all facility locations in the selected county
-query: find({ county }).select( facility.name, )


**GET /api/v1/physicians/:_id** - get.js
-@authorization basic -
-Returns: finds Physician document by _id


**POST /api/v1/physicians/** - create.js
-@authorization  -
-returns: a new physician document
-[CAUTION: all fields required]
-@param 
    -firstName (require) - {String}
    -lastName (require) - {String}
    -specialty (require) - {String}
    -term (require) - {String}
    -state (require) - {String}
    -facility (require) - [{ name: String , address: {String, String, Number}, county: (require) - {String} }]


**PUT /api/v1/physicians/:_id** - update.js
-@authorization basic -
-returns: _id selected user document is updated with the new physician path values that the user inputed
-query: findOneAndUpdate(_id, {...all physician fields...}) 
-[CAUTION: front end should open document to be edited and leave all physician fields the same until user changes them, changed fields will be reflected in the updated document] 
-@param
    *firstName - {String}
    *lastName - {String}
    *specialty - {String}
    *term - {String}
    *state - {String}
    *facility - [{ name: String , address: {String, String, Number}, county: (require) - {String} }]


**DELETE /api/v1/physicians/** - remove.js
-@authorization basic -
-Returns: deletes a Physician document selected by _id
