<template>
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <h3>Trade or View your Portfolio</h3>
            <p>You may Save & Load your data</p>
            <p>Click on 'End Day' to begin a new day!</p>
        </div>
        <div class="card-action">
            <h6>Your Funds {{ funds | currency }}</h6>
        </div>
      </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        computed: {
            ...mapGetters([
                'funds'
            ])
        }
    }  
</script>

<style scoped>

    .card {
        margin-top: 40px;
        padding: 40px 20px;
    }

</style>
