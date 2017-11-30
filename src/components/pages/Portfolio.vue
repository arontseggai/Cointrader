<template>
    <div class="row">
      <app-asset v-if="coin.quantity > 0" v-for="(coin, index) in coins" :coin="coin" :index="index" :key="coin.name"></app-asset>
    </div>
</template>

<script>
  import Asset from './Asset.vue'

  export default {
    data() {
      return {
        coins: this.$store.state.coins
      };
    },
    components: {
      appAsset: Asset
    }
  }
    
</script>