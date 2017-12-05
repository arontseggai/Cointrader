<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Cointrader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

            <router-link class="nav-item" to="/portfolio/" tag="li" active-class="active" ><a class="nav-link">Portfolio</a></router-link>
            <router-link class="nav-item" to="/coins/" tag="li" active-class="active" ><a class="nav-link">Coins</a></router-link>

            </ul>
            <ul class="navbar-nav my-lg-0">
            <li class="nav-item">
                <a class="nav-link" @click.prevent="endDay">End Day<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" @click="showDropDown = !showDropDown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Save & Load
                </a>
                <transition name="grow">
                    <div class="dropdown-menu" :class="{ show: showDropDown }" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" @click.prevent="saveDataAction">Save Data to Server</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" @click.prevent="loadDataAction">Load Data from Server</a>
                    </div>
                </transition>
            </li>
            <li>
                <span class="navbar-brand">Funds {{ funds | currency }}</span>
            </li>
            </ul>          
        </div>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                showDropDown: false
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
                this.showDropDown = false;
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
                this.showDropDown = false;
                this.loadData();
            }
        }
    }
</script>

<style>

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