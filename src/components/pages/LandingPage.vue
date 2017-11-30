<template>
    <div class="card">
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your data</p>
        <p>Click on 'End Day' to begin a new day!</p>
        <hr>
        <h4>Your Funds {{ this.$store.state.funds | currency }}</h4>
    </div>
</template>

<script>
    
</script>

<style scoped>

    .card {
        margin-top: 40px;
        padding: 40px 20px;
    }

</style>
