import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/dashboard/:id',
            name: 'dashboard',
            component: () => import('../views/DashboardVue.vue')
        },
        {
            path: '/login/:tab',
            name: 'loginTab',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/user_panel/:tab',
            name: 'userTab',
            component: () => import('../views/UserView.vue')
        },
        {
            path: '/user_panel/',
            name: 'user',
            component: () => import('../views/UserView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/ErrorView404.vue')
        },
    ]
})

export default router
