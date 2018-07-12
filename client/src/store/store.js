import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: {},
        isUserLoggedIn: false,
        name: null,
        email: null,
        contact: null,
        password: null,
        answer: null,
        question: null,
        role: null
    },
    mutations: {
        setToken(state,token){
            state.token = token
            if(token){
                state.isUserLoggedIn=true
            }else {
                state.isUserLoggedIn=false
            }
        },
        setUser(state,user){
            state.user = user;
            state.user.name = user.name;
            state.user.email = user.email;
            state.user.contact = user.contact;
            state.user.answer= user.answer;
            state.user.select = user.select;
            state.user.role= user.role;
            
        },
        getUser() {
            return this.state.name;
        }
    },
    actions: {
        setToken ({commit}, token){
            commit('setToken',token)
        },
        setUser ({commit}, user){
            commit('setUser',user)
        },
    }
})