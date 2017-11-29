<template>
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
            <h4 class="card-header">Bitcoin <span class="card-price">(price: 110)</span></h4>
            <div class="card-body">
                <input type="text" class="form-control">
                <button class="btn btn-success">Buy</button>
            </div>
            </div>
        </div> 
    </div>
</template>

<script>
    
</script>


<style scoped>
  .card {
    margin-top: 40px;
  }

  .card-price {
    font-size: 12px;
  }

  .card-body {
    display: flex;
    justify-content: space-between;
  }

  .form-control {
    width: 30%;
  }
</style>