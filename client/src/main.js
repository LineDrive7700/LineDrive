// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps";
import store from '@/store/store'
// const HelloJs = require('hellojs/dist/hello.all.min.js');
// const VueHello = require('vue-hellojs');

// HelloJs.init({
//   google: GOOGLE_APP_id,
// },{
//     redirect_uri: 'authcallback/'
// });
//  Vue.use(VueHello, HelloJs);

sync(store, router)

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(BootstrapVue);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
