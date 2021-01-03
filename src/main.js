import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import '@/scss/main.scss';
import '../node_modules/@fortawesome/fontawesome-free/js/all'; // Require font-awesome
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import Calculator from "@/components/views/Calculator";
import Learn from "@/components/views/Learn";

Vue.config.productionTip = false;

Vue.use(VueLodash, {lodash: lodash});
Vue.use(VueRouter);

const routes = [
    {path: '/', component: Calculator},
    {path: '/learn', component: Learn}
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');
