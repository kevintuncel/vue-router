import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ContactView from '@/views/ContactView.vue'
import CartView from '@/views/CartView.vue'
import NotFound from '@/views/NotFoundView.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/product',
            component: ProductsView
        },
        {
            path: '/contact',
            component: ContactView
        },
        {
            path: '/about',
            component: AboutView
        },
        {
            path: '/cart',
            component: CartView
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})

export default router