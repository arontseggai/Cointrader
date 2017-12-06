<template>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{ coin.name }} <span class="card-price">(Price: {{ coin.price }})</span></span>
            <div class="input-field">
                <input v-model="quantity" type="number" class="validate" placeholder="Quantity" :class="{danger: insufficientFunds}">
            </div>
        </div>
        <div class="card-action">
            <button 
                class="waves-effect waves-light btn" 
                @click="buyCoinAction" 
                :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'  }}</button>
        </div>
      </div>
    </div>

        <!-- <div class="card">
            <h4 class="card-header">{{ coin.name }} <span class="card-price">(Price: {{ coin.price }})</span></h4>
            <div class="card-body">
                <input v-model="quantity" type="number" class="form-control" placeholder="Quantity" :class="{danger: insufficientFunds}">
                <button 
                    class="btn btn-success" 
                    @click="buyCoinAction" 
                    :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'  }}</button>
            </div>
        </div> -->
    </div>   
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                quantity: null
            };
        },
        props: ['coin'],
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.coin.price > this.funds;
            }
        },
        methods: {
            ...mapActions([
                'buyCoin'
            ]),
            buyCoinAction() {
                const order = {
                    coinId: this.coin.id,
                    coinPrice: this.coin.price,
                    quantity: parseInt(this.quantity)
                };
                console.log(order);
                this.$store.dispatch('buyCoin', order);
                this.quantity = null;
            }
        }
    }
</script>

<style scoped>
  .card-price {
    font-size: 12px;
  }
    input {
        color: #fff; 
    }
    
</style>