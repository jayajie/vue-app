import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Search from './components/Search.vue'
import Cart from './components/Cart.vue'
import Person from './components/Person.vue'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home},
        { path: '/search', component: Search},
        { path: '/cart', component: Cart},
        { path: '/person', component: Person}
    ],
    linkActiveClass: 'mui-active'
})

export default router