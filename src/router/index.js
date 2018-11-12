import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/index/Home';
// import Login from '@/components/Login';
// import Branch from '@/components/Branch';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: Login,
        // },
        // {
        //     path: '/branch',
        //     name: 'branch',
        //     component: Branch,
        // },
    ],
});
