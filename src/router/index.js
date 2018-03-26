import Vue from 'vue'
import Router from 'vue-router'
import login from 'components/login/login'
import main from 'components/main/main'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/login',
			component: login
		},
		{
			name: 'main',
			path: '/main',
			component: main,
		}
	]
})