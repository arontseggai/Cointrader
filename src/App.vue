<template>
  <div class="grid">
      <app-header></app-header>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue'

  export default {
    data() {
      return {
        title: 'Hello peoples, Cmaan'
      };
    },
    components: {
      AppHeader: Header
    }
  }
</script>

<style>
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
    position: absolute;    
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

