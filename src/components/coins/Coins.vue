<template>
    <div class="row">
      <app-coin v-for="coin in coins" :coin="coin"></app-coin>
    </div>
</template>

<script>
  import Coin from './Coin.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      appCoin: Coin
    },
    computed: {
      coins() {
        return this.$store.getters.coins;
      }
    }
  }
    
</script>