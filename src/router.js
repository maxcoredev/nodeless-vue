import Home from '/Home.js';
import About from '/About.js';

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About}
    ]
});

const app = Vue.createApp({}).use(router).mount('#app')