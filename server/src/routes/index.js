const express = require('express');
var coachRoutes = require('./coach.routes')
const routes= express.Router()
module.exports = (function() {
    'use strict';
    

    routes.use('/coach',coachRoutes);
    

    return routes;
})();