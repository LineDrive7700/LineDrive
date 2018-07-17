import Api from './Api'

export default {
    post(credentials){
        console.log("in BookCoachpost "+credentials )
        return Api().post('/member/bookCoach',credentials)
    },
}

