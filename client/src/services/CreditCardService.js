import Api from './Api'

export default {
    index(credentials){
        console.log("in selected index")
        return Api().get('bookAvailability',{params: credentials})
    },
    post(credentials){
        console.log(credentials)
        return Api().post('saveCreditCard',credentials)
    },
    delete(credentials){
        console.log("in selected post "+credentials )
        return Api().delete('bookAvailability',{params: credentials})
    },
}

