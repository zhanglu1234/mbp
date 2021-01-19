
import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '.././views/login.vue'
import inStock from '.././views/inStock.vue'
import pickStock from '.././views/pickStock.vue'
import moveStock from '.././views/moveStock.vue'
import index from '.././views/index.vue'
import txt from '.././views/txt.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			component:login

		},
		{
			path: '/index',
			component: index

		},
		{
			path: '/inStock',
			component: inStock

		},
		{
			path: '/pickStock',
			component: pickStock

		},
		{
			path: '/moveStock',
			component: moveStock

		},
		{
			path: '/txt',
			component: txt

		}
	]
})

export default router