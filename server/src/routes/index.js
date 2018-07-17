var express = require('express');
var router = express.Router();

const LocationController = require('./../controllers/LocationController')
const SlotsController = require('./../controllers/SlotsController')

var memberRouter = require('./member');
var coachRouter = require('./coach');

    router.post('/health-check', function(req, res) {
        res.send("OK");
    });
    router.use('/coach',coachRouter)
    router.use('/member',memberRouter)
    
    router.get('/locationAvailability',
    LocationController.index)

    router.get('/slotsAvailability',
    SlotsController.index)

    router.post('/slotsAvailability',
    SlotsController.post)

    module.exports = router;
