export default {
  path: '/online-recharge',
  redirect: '/online-recharge/card-management',
  meta: { icon: 'icon-chongzhi', name: '线上充值管理' },
  component: () =>
    import(/* webpackChunkName: "layout" */ '@/layouts/BasicLayout.vue'),

  children: [
    {
      path: '/online-recharge/card-management',
      name: 'card-management',
      meta: { name: '卡片管理' },
      component: () =>
        import(
          /* webpackChunkName: "online-recharge" */ '@/views/card-management'
        )
    },
    {
      path: '/online-recharge/historical-task',
      name: 'historical-task',
      meta: { name: '历史任务' },
      component: () =>
        import(
          /* webpackChunkName: "online-recharge" */ '@/views/historical-task'
        )
    },
    {
      path: '/online-recharge/script-management',
      name: 'script-management',
      meta: { name: '脚本管理' },
      component: () =>
        import(
          /* webpackChunkName: "online-recharge" */ '@/views/script-management'
        )
    },
    {
      path: '/online-recharge/touch-condition-config',
      name: 'touch-condition-config',
      meta: { name: '触碰条件配置' },
      component: () =>
        import(
          /* webpackChunkName: "online-recharge" */ '@/views/touch-condition-config'
        )
    },
    {
      path: '/online-recharge/script-change-record',
      name: 'script-change-record',
      meta: { name: '脚本变更记录' },
      component: () =>
        import(
          /* webpackChunkName: "online-recharge" */ '@/views/script-change-record'
        )
    }
  ]
}
