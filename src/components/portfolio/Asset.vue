<template>
    <div class="col-lg-6">
        <div class="card">
            <h4 class="card-header">{{ coin.name }} <span class="card-price">(Price: {{ coin.price }} | Quantity: {{ coin.quantity }})</span></h4>
            <div class="card-body">
                <input  v-model="quantity" 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity"
                        :class="{danger: insufficientQuantity}">
                <button 
                    class="btn btn-primary" 
                    @click="sellCoinAction"
                    :disabled="insufficientQuantity || quantity <= 0">{{ insufficientQuantity ? 'Not Enough Coins' : 'Sell' }}</button>
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
    .danger {
        border: 1px solid red;
    }
    

  .card {
    margin-top: 40px;
  }

  .card-price {
    font-size: 12px;
  }

  .card-body {
    display: flex;
    justify-content: space-between;
  }

  .form-control {
    width: 30%;
  }
</style>