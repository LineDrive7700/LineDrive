import Api from './Api'

export default {
    index (email){
        return Api().get('/coach/profile',{params: email})
    },
}