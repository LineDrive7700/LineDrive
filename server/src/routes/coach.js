
var express = require('express');
var router = express.Router();

const CoachAuthenticationController = require('./../controllers/CoachAuthenticationController')
const CoachAuthenticationControllerPolicy = require('./../policies/CoachAuthenticationControllerPolicy')


const UserProfileController = require('./../controllers/UserProfileController')

const CoachAvailabilityController = require('./../controllers/CoachAvailabilityController')
const CoachAvailabilityAuthenticationControllerPolicy = require('./../policies/CoachAvailabilityAuthenticationControllerPolicy')

    router.post('/registerCoach',
    CoachAuthenticationControllerPolicy.registerCoach,
    CoachAuthenticationController.registerCoach);

    router.post('/loginCoach',
    CoachAuthenticationControllerPolicy.loginCoach,
    CoachAuthenticationController.loginCoach);

    router.post('/forgotPassCoach',
    CoachAuthenticationControllerPolicy.forgotPassCoach,
    CoachAuthenticationController.forgotPassCoach)

    router.get('/profile/',
    UserProfileController.index)

    router.post('/profile',
    CoachAuthenticationControllerPolicy.profile,
    CoachAuthenticationController.profile)


    router.get('/bookAvailability/',
    //CoachAvailabilityAuthenticationControllerPolicy.viewSlot,
    CoachAvailabilityController.index)

    router.post('/bookAvailability',
    CoachAvailabilityAuthenticationControllerPolicy.bookSlot,
    CoachAvailabilityController.post)

    router.delete('/bookAvailability',
    //CoachAvailabilityAuthenticationControllerPolicy.bookSlot,
    CoachAvailabilityController.delete)

    module.exports = router;