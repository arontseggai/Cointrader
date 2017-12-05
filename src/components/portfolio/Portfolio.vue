<template>
    <div class="row">
      <app-asset v-if="coin.quantity > 0" v-for="coin in coinPortfolio" :coin="coin"></app-asset>
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
        'coinPortfolio'
      ])
    }
  }
    
</script>