const CoachAuthenticationController = require('./controllers/CoachAuthenticationController')

const CoachAuthenticationControllerPolicy = require('./policies/CoachAuthenticationControllerPolicy')
const MemberAuthenticationController = require('./controllers/MemberAuthenticationController')

const MemberAuthenticationControllerPolicy = require('./policies/MemberAuthenticationControllerPolicy')
const UserProfileController = require('./controllers/UserProfileController')

module.exports = (app) =>{
    app.post('/registerCoach',
    CoachAuthenticationControllerPolicy.registerCoach,
    CoachAuthenticationController.registerCoach),

    app.post('/loginCoach',
    CoachAuthenticationControllerPolicy.loginCoach,
    CoachAuthenticationController.loginCoach),

    app.post('/forgotPassCoach',
    CoachAuthenticationControllerPolicy.forgotPassCoach,
    CoachAuthenticationController.forgotPassCoach),

    app.get('/profile',
    UserProfileController.index),

    app.post('/profile',
    CoachAuthenticationControllerPolicy.profile,
    CoachAuthenticationController.profile),

    
    app.post('/loginMember',
    MemberAuthenticationControllerPolicy.loginMember,
    MemberAuthenticationController.loginMember),

    app.post('/loginMember',
    MemberAuthenticationControllerPolicy.loginMember,
    MemberAuthenticationController.loginMember),

    app.post('/registerMember',
    MemberAuthenticationControllerPolicy.registerMember,
    MemberAuthenticationController.registerMember)
    
}