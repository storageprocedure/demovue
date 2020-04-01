import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min';
import 'admin-lte/dist/js/adminlte';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/dist/css/adminlte.min.css';



Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
