<template>
    <div class="row">
      <app-stock v-for="(coin, index) in coins" :coin="coin" :index="index" :key="coin.name"></app-stock>
    </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data() {
      return {
        coins: this.$store.state.coins
      };
    },
    components: {
      appStock: Stock
    }
  }
    
</script>