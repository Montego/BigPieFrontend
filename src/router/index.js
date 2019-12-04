import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../pages/Welcome.vue';
import Login from '../pages/Login';
import Register from '../pages/Register.vue';
import E404 from '../pages/E404.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'welcome',
		component: Welcome
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '',
		redirect: { name: 'login' }
	},
	{
		path: '*',
		component: E404
	}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;
