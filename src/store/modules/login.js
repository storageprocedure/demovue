import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token'),
        errors: [],
    },

    mutations: {
        clearErrors: (state) => {
            state.errors = [];
        },
        addError: (state, payload) => {
            state.errors.push(payload);
        }
    },
    actions: {
        getToken: async (context, payload) => {
            context.commit('clearErrors');
            await Axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json?l=' + payload.login)
                .then(function(response){
                    if( response.data.bpi){
                        localStorage.setItem('token', response.data.bpi)
                    }else{
                        context.commit('addError', {message:'Login or Password not correct!'})
                    }
                })
                .catch(error => {
                    context.commit('addError', error)
                    console.log(error);
                });
        },
    },
});

export default store;