import Vue from 'vue'

import app from './App.vue'


const vm = new Vue({
    el: '#app',
    data: {
        msg: 'koko'
    },
    render: c => c(app)
}) 