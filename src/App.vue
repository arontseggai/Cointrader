<template>
  <div class="grid">
      <app-header></app-header>
      <div class="container">
        <div class="row">
          <div class="col s12">
            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>        
      </div>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue'

  export default {
    components: {
      AppHeader: Header
    },
    created() {
      this.$store.dispatch('initCoins');
    }
  }
</script>

<style scoped>
  .container {
    padding-top: 100px;
  }
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 0.3s ease-out forwards;
    transition: opacity 0.3s;
  }
  .slide-leave {}
  .slide-leave-active {
    animation: slide-out 0.3s ease-out forwards;
    transition: opacity 0.3s;
    opacity: 0;
     
  }

  @keyframes slide-in {
  from {
    transform: translateX(-50px);
    } to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
      } to {
        transform: translateX(50px);
      }
    }
</style>

