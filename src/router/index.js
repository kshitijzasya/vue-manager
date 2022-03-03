import Vue from 'vue'
import VueRouter from 'vue-router';
import {mapGetters} from 'vuex';
import store from '../store';

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		meta: {
			restricted: true
		},
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/dashboard'
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		meta: {
			restricted: true
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
		meta: {
			restricted: true
		},
	},
	{
		path: '/tables',
		name: 'Tables',
		layout: "dashboard",
		component: () => import('../views/Tables.vue'),
		meta: {
			restricted: true
		},
	},
	{
		path: '/billing',
		name: 'Billing',
		layout: "dashboard",
		component: () => import('../views/Billing.vue'),
		meta: {
			restricted: true
		},
	},
	{
		path: '/rtl',
		name: 'RTL',
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
			restricted: true
		},
		component: () => import('../views/RTL.vue'),
	},
	{
		path: '/Profile',
		name: 'Profile',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-profile',
			restricted: true
		},
		component: () => import('../views/Profile.vue')
	},
	{
		path: '/sign-in',
		name: 'Login',
		component: () => import('../views/Sign-In.vue'),
		meta: {
			restricted: false
		},
	},
	{
		path: '/sign-up',
		name: 'Register',
		meta: {
			layoutClass: 'layout-sign-up',
			restricted: false
		},
		component: () => import('../views/Sign-Up.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

router.beforeEach((to, from, next) => { 
	let isRestricted = to.meta.restricted; console.log('need authentication', store.getters.isAuthenticated)
	if (isRestricted && !store.getters.isAuthenticated) next({name: 'Login'})
	else next()
})

export default router
