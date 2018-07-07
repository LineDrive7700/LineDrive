console.log('hello coach')
const express = require('express');
const AuthenticationController = require('./../controllers/CoachAuthenticationController')
const AuthenticationControllerPolicy = require('./../policies/CoachAuthenticationControllerPolicy')
const routes = express.Router();


module.exports = (function() {
    'use strict';
    
    var routes = express.Router();

    routes.post('/registerCoach', AuthenticationControllerPolicy.registerCoach,
    AuthenticationController.registerCoach)

    return routes;
})();
