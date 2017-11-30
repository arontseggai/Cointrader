import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

const INCREASE = 1;
const DECREASE = 0;

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
        }
    }
});