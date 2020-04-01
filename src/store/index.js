import Vue from 'vue'
import Vuex from 'vuex'
import deflt from './modules/default'
import login from './modules/login'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        deflt,
        login,
    },
    strict: debug
})