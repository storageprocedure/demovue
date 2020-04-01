import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        myTitle: "Default Page",
        currency: null,
    },

    mutations: {
        setCurrency: (state, payload) => {
            state.currency = payload;
        }
    },
    actions: {
        getCurrency: async (context) => {
            let data = await Axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (response.data.bpi));
            context.commit('setCurrency', data);
        },
    },
});

export default store;
