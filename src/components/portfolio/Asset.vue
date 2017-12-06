<template>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{{ coin.name }} <span class="card-price">(Price: {{ coin.price }} | Quantity: {{ coin.quantity }})</span></span>
            <div class="row">
                <div class="col s9">
                    <div class="input-field">
                        <input v-model="quantity" type="number" class="validate" placeholder="Quantity" :class="{danger: insufficientFunds}">
                    </div>
                </div>
                <div class="col s3">
                    <div class="input-field file-field">
                        <button 
                            class="waves-effect waves-light btn" 
                            @click="sellCoinAction" 
                            :disabled="insufficientQuantity || quantity <= 0">{{ insufficientQuantity ? 'Not Enough Coins' : 'Sell' }}</button>                                
                    </div>
                </div>
            </div>            
        </div>
      </div>
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
        computed: {
            insufficientQuantity() {
                return this.quantity > this.coin.quantity;
            }
        },
        props: ['coin'],
        methods: {
            ...mapActions([
                'sellCoin'
            ]),
            sellCoinAction() {
                const order = {
                    coinId: this.coin.id,
                    quantity: parseInt(this.quantity),
                    coinPrice: this.coin.price
                };
                this.$store.dispatch('sellCoin', order);
                this.quantity = undefined;
            }
        }
    }
</script>

<style scoped>
  .card-price {
    font-size: 12px;
  }
</style>