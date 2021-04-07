import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";
import Default from '../views/default.vue';
import Indexs from '../components/index/index.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'default',
        component: Default,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                component: Indexs,
            }
        ],
    },
    {
        path: '/blank',
        name: 'blank',
        component: () => import('../views/blank.vue'),
        children: [
            {
                path: '/login',
                name: 'login',
                component: () => import(/* webpackChunkName: "login" */ '../page/login.vue'),
            },
            {
                path: '/register',
                name: 'register',
                component: () => import(/* webpackChunkName: "register" */ '../page/register.vue')
            },
            {
                path: '/details',
                name: 'details',
                component: () => import(/* webpackChunkName: "details" */ '../page/Details.vue'),
                meta: {
                    keepAlive: true
                },
                beforeEnter (to, from, next) {
                    if (store.state.data) {
                        next();
                    }
                    else {
                        next('/')
                    }
                }
            },
            {
                path: '/release',
                name: 'release',
                component: () => import(/* webpackChunkName: "release" */ '../page/release.vue'),
                beforeEnter (to, from, next) {
                    if (store.state.data) {
                        next();
                    }
                    else {
                        next('/')
                    }
                }
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: "err" */ '../page/error'),
    },
]


const router = new VueRouter({
    mode: 'history',
    routes
})


// router.beforeEach((to, from, next) => {
//     console.log(to);
//     // console.log(from);
//     next()
// })

export default router
