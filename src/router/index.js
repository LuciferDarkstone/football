import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('pages/home/home.vue')
const Detail = () => import('pages/detail/detail.vue')
const Race = () => import('pages/race/race.vue')
const Data = () => import('pages/data/data.vue')

const router = new Router({
  // routes配置最好加上name属性，用于参数传递
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:leg(\\d+)/race/:id(\\d+)',
      component: Detail
    },
    {
      path: '/:leg(\\d+)/race',
      component: Race
    },
    {
      path: '/:leg(\\d+)/data',
      component: Data
    },
    // 设置404错误页面
    // {
    //    path:'*',
    //    component:Error
    // }
  ]
})

// 路由拦截
router.beforeEach((to, from, next) => {
  // 没有匹配成功的路由，跳转到index页面,to.matched.length一级路由返回1，二级路由返回2，以此类推
  if (to.matched.length >= 1) {
    next()
  } else {
    next({path: '/home'})
  }
})

export default router
