import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from 'C:/Users/sonic/Desktop/test/test/src/components/login.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        components: Login
    }
]

const router = new VueRouter({
    routes
})

export default router