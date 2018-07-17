import Api from './Api'

export default {
    index(credentials){
        console.log("in selected index")
        return Api().get('member/bookCage',{params: credentials})
    },
    post(credentials){
        console.log("in selected post "+credentials )
        return Api().post('member/bookCage',credentials)
    },
}

