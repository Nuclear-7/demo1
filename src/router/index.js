//引入Vue|Vue-router
import Vue from 'vue'
import Router from 'vue-router'
import Login from "../view/login";
import Music from "../view/music";
//使用路由插件
Vue.use(Router)

const router = new Router({
	routes:[
        {
            path: '/',
            redirect: '/login',
        },
		{
			path:'/login',
			component:Login
		},
		{
			path:'/music',
			component:Music
		}

	]
})

//暴露router
export default router