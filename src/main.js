import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import db from './configuration/datastore'


Vue.config.productionTip = false

Vue.prototype.$db = db

// Vue Trix editor
import "vue-trix";

import moment from 'vue-moment'
Vue.use(moment)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
