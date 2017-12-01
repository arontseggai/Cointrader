<template>
    <div class="row">
      <app-asset v-if="coin.quantity > 0" v-for="(coin, index) in getCoins" :coin="coin" :index="index" :key="coin.name"></app-asset>
    </div>
</template>

<script>
  import Asset from './Asset.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      appAsset: Asset
    },
    computed: {
      ...mapGetters([
        'getCoins'
      ])
    }
  }
    
</script>