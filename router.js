import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home         from '@/pages/'
import Country      from '@/pages/Country'
import ByCategory   from '@/pages/ByCategory'
import NewsInDetail from '@/pages/NewsInDetail'
import Search       from '@/pages/Search'

Vue.use(Router)

const  routes = {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/category/:category',
            name:'NewsByCategory',
            component: ByCategory
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
            // query: {
            //     q: ''
            // }
        },
        {
            path:'/news/:slug/:sources?/:category?',
            name: 'NewsInDetail',
            component: NewsInDetail
        },
        {
            path: '/countries/:country',
            name:'ByCountry',
            component: Country
        }
    ]
}

export function createRouter() {
    return new Router(routes)
}