import Api from './Api'

export default {
    registerCoach (credentials){
        console.log(credentials)
        return Api().post('/coach/registerCoach',credentials)
    },
    loginCoach (credentials){
        console.log(credentials)
        return Api().post('/coach/loginCoach',credentials)
    },
    loginMember (credentials){
        return Api().post('member/loginMember',credentials)
    },
    forgotPass (credentials){
        return Api().post('/coach/forgotPassCoach',credentials)
    },
    profile (credentials){
        return Api().post('/coach/profile',credentials)
    },
    registerMember (credentials){
        console.log(credentials)
        return Api().post('/member/registerMember',credentials)
    },
}

