//setup the express Router
const { Router: router } = require('express');
//add middleware(permission levels, etc. here)
//require all the subfiles for handling requests
const create = require('./create');
const remove = require('./remove');
