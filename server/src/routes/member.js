
var express = require('express');
var router = express.Router();


const MemberAuthenticationController = require('./../controllers/MemberAuthenticationController')
const MemberAuthenticationControllerPolicy = require('./../policies/MemberAuthenticationControllerPolicy')
const CageAvailabilityController = require('./../controllers/CageAvailabilityController')
const CoachBookingController = require('./../controllers/CoachBookingController')
const CoachAuthenticationController = require('./../controllers/CoachAuthenticationController')
const CoachAuthenticationControllerPolicy = require('./../policies/CoachAuthenticationControllerPolicy')

const UserProfileController = require('./../controllers/UserProfileController')

    router.get('/profile/',
    UserProfileController.index),

    router.post('/profile',
    CoachAuthenticationControllerPolicy.profile,
    CoachAuthenticationController.profile),

    router.post('/loginMember',
    MemberAuthenticationControllerPolicy.loginMember,
    MemberAuthenticationController.loginMember),

    router.post('/loginMember',
    MemberAuthenticationControllerPolicy.loginMember,
    MemberAuthenticationController.loginMember),

    router.post('/registerMember',
    MemberAuthenticationControllerPolicy.registerMember,
    MemberAuthenticationController.registerMember),


    router.get('/bookCage/',
    CageAvailabilityController.index)

    router.post('/bookCage',
    CageAvailabilityController.post)

    router.post('/bookCoach',
    CoachBookingController.post)
    
    module.exports = router;