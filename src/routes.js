import LandingPage from './components/pages/LandingPage.vue'
import Stocks from './components/pages/Stocks.vue'
import Portfolio from './components/pages/Portfolio.vue'

export const routes = [
    { path: '', component: LandingPage },
    { path: '/stocks', component: Stocks },
    { path: '/portfolio', component: Portfolio },
    { path: '*', redirect: '/' }
];