import Vue from 'vue';
import Axios from 'axios';
import Vuex from 'Vuex';
import * as actions from './actions'
import coins from './modules/coins';
import portfolio from './modules/portfolio';

window.axios = Axios;
window.axios.defaults.baseURL = 'https://vuejs-http-3a7ed.firebaseio.com';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        coins,
        portfolio
    }
});