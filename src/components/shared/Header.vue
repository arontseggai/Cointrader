<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stocktrader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

            <router-link class="nav-item" to="/portfolio/" tag="li" active-class="active" ><a class="nav-link">Portfolio</a></router-link>
            <router-link class="nav-item" to="/stocks/" tag="li" active-class="active" ><a class="nav-link">Stocks</a></router-link>

            </ul>
            <ul class="navbar-nav my-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="#">End Day<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Save & Load
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Save</a>
                <a class="dropdown-item" href="#">Load</a>
                <!-- <div class="dropdown-divider"></div> -->
                </div>
            </li>
            <li>
                <span class="navbar-brand">Funds $10.000</span>
            </li>
            </ul>          
        </div>
    </nav>
</template>

<script>
    
</script>