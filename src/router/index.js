import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import OnlineRecharge from './modules/online-recharge'
import Dashboard from './modules/dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  { ...Dashboard },
  /* ==== 线上充值管理 ==== */
  { ...OnlineRecharge }

  /* Exception 404 403 500 */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.path !== from.path) {
  //   NProgress.start()
  // }
  // const record = findLast(to.matched, record => record.meta.authority)
  // if (record && !check(record.meta.authority)) {
  //   if (!isLogin() && to.path !== '/user/login') {
  //     next({
  //       path: '/user/login'
  //     })
  //   } else if (to.path !== '/403') {
  //     notification.error({
  //       message: '403',
  //       description: '你没有权限访问，请联系管理员咨询。'
  //     })
  //     next({
  //       path: '/403'
  //     })
  //   }
  //   NProgress.done()
  // }
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
