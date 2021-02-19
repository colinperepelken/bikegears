import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import '@/scss/main.scss';
import '../node_modules/@fortawesome/fontawesome-free/js/all'; // Require font-awesome
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import Calculator from "@/components/views/Calculator";
import Learn from "@/components/views/Learn";
import {store} from './store';
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

Vue.use(VueLodash, {lodash: lodash});
Vue.use(VueRouter);
Vue.use(VueGtag, {config: {id: "123todo"}});

const routes = [
    {path: '/', component: Calculator},
    {path: '/learn', component: Learn}
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

// Set up store
store.commit('setBikeColor', 0);

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app');

