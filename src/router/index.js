import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Index from '../components/index/index.vue'
import Paiban from '../components/paiban/paiban.vue'
import Tongzhi from '../components/tongzhi/tongzhi.vue'
import Gongdan from '../components/gongdan/gongdan.vue'
import Beijian from '../components/beijian/beijian.vue'
import Shuju from '../components/shuju/shuju.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        children: [{
                path: '/index',
                name: 'Index',
                components: Index
            },
            {
                path: 'paiban',
                name: 'Paiban',
                components: Paiban
            },
            {
                path: 'tongzhi',
                name: 'Tongzhi',
                components: Tongzhi
            },
            {
                path: 'gongdan',
                name: 'Gongdan',
                components: Gongdan
            },
            {
                path: 'beijian',
                name: 'Beijian',
                components: Beijian
            },
            {
                path: 'shuju',
                name: 'Shuju',
                components: Shuju
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router