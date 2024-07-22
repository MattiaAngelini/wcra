import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppSchedule from './pages/AppSchedule.vue';
import AppIstruttori from './pages/AppIstruttori.vue';
import AppSedi from './pages/AppSedi.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome
    },
    {
        path: '/orari-corsi',
        name: 'schedule',
        component: AppSchedule
    },
    {
        path: '/istruttori',
        name: 'istruttori',
        component: AppIstruttori
    },
    {
        path: '/sedi',
        name: 'sedi',
        component: AppSedi
    }
];

const router = createRouter({	
    history: createWebHistory(),
    routes,
    scrollBehavior() {
            return { left: 0, top: 0 };
        
    }
});

export { router };
