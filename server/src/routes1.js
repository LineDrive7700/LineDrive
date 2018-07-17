var express = require('express');
var router = express.Router();

const CoachAuthenticationController = require('./controllers/CoachAuthenticationController')
const CoachAuthenticationControllerPolicy = require('./policies/CoachAuthenticationControllerPolicy')

const MemberAuthenticationController = require('./controllers/MemberAuthenticationController')
const MemberAuthenticationControllerPolicy = require('./policies/MemberAuthenticationControllerPolicy')

const UserProfileController = require('./controllers/UserProfileController')

const CoachAvailabilityController = require('./controllers/CoachAvailabilityController')
const CoachAvailabilityAuthenticationControllerPolicy = require('./policies/CoachAvailabilityAuthenticationControllerPolicy')

const CageAvailabilityController = require('./controllers/CageAvailabilityController')

const CoachBookingController = require('./controllers/CoachBookingController')

const LocationController = require('./controllers/LocationController')
const SlotsController = require('./controllers/SlotsController')



    router.post('/registerCoach',
        CoachAuthenticationControllerPolicy.registerCoach,
        CoachAuthenticationController.registerCoach
     );

     router.post('/loginCoach',
        CoachAuthenticationControllerPolicy.loginCoach,
        CoachAuthenticationController.loginCoach
     );

    router.post('/forgotPassCoach',
    CoachAuthenticationControllerPolicy.forgotPassCoach,
    CoachAuthenticationController.forgotPassCoach)

    router.get('/profile/',
    UserProfileController.index)

    router.post('/profile',
    CoachAuthenticationControllerPolicy.profile,
    CoachAuthenticationController.profile)

    router.post('/loginMember',
    MemberAuthenticationControllerPolicy.loginMember,
    MemberAuthenticationController.loginMember)

    router.post('/loginMember',
    MemberAuthenticationControllerPolicy.loginMember,
    MemberAuthenticationController.loginMember)

    router.post('/registerMember',
    MemberAuthenticationControllerPolicy.registerMember,
    MemberAuthenticationController.registerMember)

    router.get('/bookAvailability/',
    //CoachAvailabilityAuthenticationControllerPolicy.viewSlot,
    CoachAvailabilityController.index)

    router.post('/bookAvailability',
    CoachAvailabilityAuthenticationControllerPolicy.bookSlot,
    CoachAvailabilityController.post)

    router.delete('/bookAvailability',
    //CoachAvailabilityAuthenticationControllerPolicy.bookSlot,
    CoachAvailabilityController.delete)

    router.get('/locationAvailability',
    LocationController.index)

    router.get('/slotsAvailability',
    SlotsController.index)

    router.post('/slotsAvailability',
    SlotsController.post)

    router.get('/bookCage/',
    CageAvailabilityController.index)

    router.post('/bookCage',
    CageAvailabilityController.post)

    router.post('/bookCoach',
    CoachBookingController.post)
    
    module.exports = router;