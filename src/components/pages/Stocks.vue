<template>
    <div class="row">
      <app-stock v-for="(coin, index) in getCoins" :coin="coin" :index="index" :key="coin.name"></app-stock>
    </div>
</template>

<script>
  import Stock from './Stock.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      appStock: Stock
    },
    computed: {
      ...mapGetters([
        'getCoins'
      ])
    }
  }
    
</script>