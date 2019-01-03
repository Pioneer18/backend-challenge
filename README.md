# backend-challenge
The back-end of an application to group all the physicians in Tampa

API Route Documentation

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
Returns: deletes a Physician document selected by _id
