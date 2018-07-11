import Api from './Api'

export default {
    index(){
        console.log("I've reache at Slot")
        return Api().get('slotsAvailability')
    },
}
