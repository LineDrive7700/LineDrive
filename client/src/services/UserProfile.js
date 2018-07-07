import Api from './Api'

export default {
    index (email){
        return Api().get('profile',email)
    },
}