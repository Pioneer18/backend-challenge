const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');
//check incoming requests to match the below credentials ( admin:supersecret )
const Authentication = basicAuth({
  users: { 
    'admin': 'supersecret', //admin can use all CRUD ops
    'guest': 'justlookin'   //guest can read only
  },
  challenge: true, //credentials are cached and auto used till browser restarts
  unauthorizedResponse: getUnauthorizedResponse
  //NOTE: if a request is not authorized a message explaining why (and a 401 error) will be returned
})


function getUnauthorizedResponse(req) {
  return req.auth
      ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
      : 'No credentials provided'
}



module.exports = { Authentication };