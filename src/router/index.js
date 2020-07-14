import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import BookDetail from '../views/BookDetail'
import BookEdit from '../views/BookEdit'

Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/bookDetail',
            component: BookDetail
        },
        {
            path: '/bookEdit',
            component: BookEdit
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})