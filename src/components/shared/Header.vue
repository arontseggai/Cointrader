<template>
<div>
    <ul class="dropdown" :class="{show: showDropdown}">
        <a @click.prevent="saveDataAction">Save Data to Server</a>
        <a @click.prevent="loadDataAction">Load Data from Server</a>
    </ul>
    <nav class="grey darken-4">
    <div class="nav-wrapper">
        <ul class="left hide-on-med-and-down">
            <router-link to="/cointrader/" tag="li" active-class="active" ><a class="nav-link logo">Cointrader</a></router-link>
            <router-link to="/cointrader/portfolio/" tag="li" active-class="active" ><a class="nav-link">Portfolio</a></router-link>
            <router-link to="/cointrader/coins/" tag="li" active-class="active" ><a class="nav-link">Coins</a></router-link>
        </ul>
        <ul class="right hide-on-med-and-down">
            <li><a class="dropdown-trigger" @click.prevent="showDropdown = !showDropdown">Save & Load<i class="material-icons right">arrow_drop_down</i></a></li>
            <li class="funds">{{ funds | currency }}</li>
        </ul>        
    </div>
    </nav>
</div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                showDropdown: false,
                toggleMobileNav: true
            };
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions([
                'randomizeCoins',
                'loadData'
            ]),
            endDay() {
                if(confirm('Are you sure you want to End the Day?')) {
                    this.randomizeCoins();
                }
            },
            saveDataAction() {
                this.showDropdown = false;
                const data = {
                    funds: this.$store.getters.funds,
                    coins: this.$store.getters.coins,
                    portfolio: this.$store.getters.coinPortfolio
                };

                axios.put('data.json', data)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                  console.log(error);
                });                
            },
            loadDataAction() {
                this.showDropdown = false;
                this.loadData();
            }
        }
    }
</script>

<style>
    .show {
        display: block !important;
    }
    .dropdown {
        z-index: 999;
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 0;
        margin-right: 8%;
        margin-top: 53px;
        border-radius: 0 0 2px 2px;
        display: none;
    }
    .dropdown a {
        font-size: 16px;
        color: #26a69a;
        display: block;
        line-height: 22px;
        background-color: #fff;
        padding: 14px 16px;
        cursor: pointer;    
    }
    .dropdown a:hover {
        background-color: #212121;
    }

    .logo {
        font-size: 26px;
    }
    .funds {
        padding: 0 15px;
        font-size: 26px;
    }

    .grow-enter {
        height: 0;
    }
    .grow-enter-active {
        height: 100%;
    }
    .grow-leave {
        height: 100%;
    }
    .grow-leave-active {
        height: 0;
    }
</style>