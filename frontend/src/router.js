import Vue from 'vue';
import VueRouter from 'vue-router';

//-- Import das paginas
import Home from '../src/views/Home.vue';
import Login from '../src/views/Login.vue';
import Register from '../src/views/Register.vue';
import Error404 from '../src/views/Error404.vue';

Vue.use(VueRouter);

//-- Path das pรกginas
const routes = [
	{ path: '/', component: Home },
	{ path: '/login', name: 'Login', component: Login, alias: ['/signin'] },
	{ path: '/register', name: 'Register', component: Register, alias: ['/signup'] },
	{ path: '/:catchAll(.*)*', name: 'Error404', component: Error404 }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;