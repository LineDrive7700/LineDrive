import Api from './Api'

export default {
    index(credentials){
        console.log("in selected index")
        return Api().get('/coach/bookAvailability',{params: credentials})
    },
    post(credentials){
        console.log("in selected post "+credentials )
        return Api().post('/coach/bookAvailability',credentials)
    },
    delete(credentials){
        console.log("in selected post "+credentials )
        return Api().delete('/coach/bookAvailability',{params: credentials})
    },
}

