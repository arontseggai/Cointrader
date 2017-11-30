import Vue from 'vue';
import Axios from 'axios';
import Vuex from 'Vuex';

window.axios = Axios;
window.axios.defaults.baseURL = 'https://vuejs-http-3a7ed.firebaseio.com';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        coins: [
            { name: 'Bitcoin', price: 100, quantity: 0},
            { name: 'Ethereum', price: 40, quantity: 0},
            { name: 'Neos', price: 20, quantity: 0 },
            { name: 'Dash', price: 90, quantity: 0 }
        ]
    },
    mutations: {
        buyCoin: (state , payload) => {
            let amount = payload.coin.price * parseInt(payload.quantity);
            let index = payload.index;
            let quantity = parseInt(payload.quantity);
            if(state.funds < amount) {
                return alert('You don\'t have enough funds.' );
            }
            state.coins[index].quantity += quantity;
            state.funds -= amount;
        },
        sellCoin: (state , payload) => {
            let amount = payload.coin.price * parseInt(payload.quantity);
            let index = payload.index;
            let quantity = parseInt(payload.quantity);
            let stateCoin = state.coins[index];
            if(stateCoin.quantity < quantity) {
                return alert('You don\'t have enough coins to sell.' );
            }
            stateCoin.quantity -= quantity;
            state.funds += amount;
        },
        endDay: state => {
            if(confirm('Are you sure you want to go to the next day?')) {
                state.coins.forEach(element => {
                    
                    let maximum = 30;
                    let minimum = 1;
                    let randomPercentage = (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum) / 100;
                    let nextDay = Math.floor(Math.random() * ( - 0 + 6)) + 0;

                    if(nextDay == 0) {
                        element.price = Math.floor(element.price * (1 - randomPercentage));
                    } else {
                        element.price = Math.floor(element.price * (1 + randomPercentage)); 
                    }
                });
            } else {
                return;
            }
        },
        saveData: state => {
            axios.put('data.json', state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
              console.log(error);
            });            
        },
        loadData: state => {
            axios.get('data.json')
                .then(response => {
                    const resultArray = [];
                    let data = response.data.coins;
                    for (let key in data) {
                      resultArray.push(data[key]);
                    }
  
                    state.coins = resultArray;
                    state.funds = response.data.funds;                 
                })
                .catch(error => {
                    console.log(error);
            });
        }


    },
    actions: {
        buyCoin: (context, payload) => {
            context.commit('buyCoin', payload);
        },
        sellCoin: (context, payload) => {
            context.commit('sellCoin', payload);
        },
        endDay: context => {
            context.commit('endDay');
        },
        saveData: context => {
            context.commit('saveData');
        },
        loadData: context => {
            context.commit('loadData');
        }        
    }
});