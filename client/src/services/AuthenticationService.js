import Api from './Api'

export default {
    registerCoach (credentials){
        console.log(credentials)
        return Api().post('registerCoach',credentials)
    },
    loginCoach (credentials){
        console.log(credentials)
        return Api().post('loginCoach',credentials)
    },
    loginMember (credentials){
        return Api().post('loginMember',credentials)
    },
    forgotPassCoach (credentials){
        return Api().post('forgotPassCoach',credentials)
    },
    profile (credentials){
        return Api().post('profile',credentials)
    },
    registerMember (credentials){
        console.log(credentials)
        return Api().post('registerMember',credentials)
    },
}

