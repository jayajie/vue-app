import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://192.168.43.123:4000/' //设置请求根路径后发送请求最前面不需要加'/'

import app from './App.vue'

import router from './router.js'

import { Header, Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)



import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/font-awesome/css/font-awesome.min.css'

import moment from 'moment'
Vue.filter('dataFormat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(dataStr).format(pattern)
})

const vm = new Vue({
    el: '#app',
    data: {
        msg: 'koko'
    },
    render: c => c(app),
    router
}) 