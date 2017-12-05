import Home from './components/pages/Home.vue'
import Coins from './components/coins/Coins.vue'
import Portfolio from './components/portfolio/Portfolio.vue'

export const routes = [
    { path: '/cointrader', component: Home },
    { path: '/cointrader/coins', component: Coins },
    { path: '/cointrader/portfolio', component: Portfolio },
    { path: '*', redirect: '/cointrader' }
];