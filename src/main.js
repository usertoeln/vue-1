/* eslint-disable */

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
// import Routes from './components/routers';
// import Bootstrap_RTL from './css/bootstrap-rtl.css';
// import TodoCss from './todo/style.css';
// import Home from './components/home';

Vue.use(VueRouter);
// Vue.use(TodoCss);
Vue.use(BootstrapVue);
import home from './components/test/home';

import routes from './components/test/my_routes';

const router = new VueRouter({
    mode: 'history',
    routes: routes
});


// Vue.use(Bootstrap_RTL);

Vue.config.productionTip = false;

new Vue({
    render: h => h(home),
    router: router
}).$mount('#app');