import Home from './components/pages/Home.vue'
import Coins from './components/coins/Coins.vue'
import Portfolio from './components/portfolio/Portfolio.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/coins', component: Coins },
    { path: '/portfolio', component: Portfolio },
    { path: '*', redirect: '/' }
];