import VueRouter from 'vue-router'

import Home from './components/tabbar/Home.vue'
import Search from './components/tabbar/Search.vue'
import Cart from './components/tabbar/Cart.vue'
import Person from './components/tabbar/Person.vue'
import NewsList from './components/news/NewsList.vue'
import NewsDetail from './components/news/NewsDetail.vue'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home},
        { path: '/search', component: Search},
        { path: '/cart', component: Cart},
        { path: '/person', component: Person},
        { path: '/newsList', component: NewsList},
        { path: '/newsDetail', component: NewsDetail}
    ],
    linkActiveClass: 'mui-active'
})

export default router