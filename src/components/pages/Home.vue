<template>
    <div class="card">
        <h1>Trade or View your Portfolio</h1>
        <br>
        <p>You may Save & Load your data</p>
        <p>Click on 'End Day' to begin a new day!</p>
        <hr>
        <br>
        <h6>Your Funds {{ funds | currency }}</h6>
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
