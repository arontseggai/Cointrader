<template>
  <div class="grid">
      <app-header></app-header>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">

          <router-view></router-view>
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

