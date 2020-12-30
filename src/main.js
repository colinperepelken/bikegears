import Vue from 'vue'
import App from './App.vue'
import '@/scss/main.scss';
import '../node_modules/@fortawesome/fontawesome-free/js/all'; // Require font-awesome
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false

Vue.use(VueLodash, { lodash: lodash })

new Vue({
  render: h => h(App),
}).$mount('#app')
