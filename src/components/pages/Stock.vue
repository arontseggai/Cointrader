<template>
    <div class="col-lg-6">
        <div class="card">
            <h4 class="card-header">{{ coin.name }} <span class="card-price">(Price: {{ coin.price }})</span></h4>
            <div class="card-body">
                <input v-model="quantity" type="text" class="form-control" placeholder="Quantity">
                <button class="btn btn-success" @click="buyCoinAction({ coin: coin, quantity: quantity, index: index})">Buy</button>
            </div>
        </div>
    </div>   
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                quantity: ''
            };
        },
        props: ['coin', 'index'],
        methods: {
            ...mapActions([
                'buyCoin'
            ]),
            buyCoinAction(payload) {
                this.buyCoin(payload);
                this.quantity = '';
            }
        }
    }
</script>

<style scoped>
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