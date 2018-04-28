import Vue from 'vue'
import Router from 'vue-router'
import login from 'components/login/login'
import main from 'components/main/main'
import exclusiveBody from 'components/exclusive-body/exclusive-body'
import songSheet from 'components/song-sheet/song-sheet'
import search from 'components/search/search'

Vue.use(Router)

export default new Router({
	routes: [{
			name: 'exclusiveBody',
			path: '/main/exclusiveBody',
			component: exclusiveBody
		},
		{
			name: 'songSheet',
			path: '/main/song-sheet/:id',
			component: songSheet
		},
		{
			name: 'login',
			path: '/login',
			component: login
		},
		{
			name: 'main',
			path: '/main',
			component: main,
			children:[
			]
		},
		{
			name: 'search',
			path: '/main/search',
			component: search,
		}
	]
})

