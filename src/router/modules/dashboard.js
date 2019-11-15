export default {
  path: '/dashboard',
  meta: { icon: 'icon-chongzhi', name: 'Dashboard' },
  component: () =>
    import(/* webpackChunkName: "layout" */ '@/layouts/BasicLayout.vue'),
  children: [
    {
      path: '/analyze',
      name: 'analyze',
      meta: { name: '分析页' },
      component: () =>
        import(/* webpackChunkName: "online-recharge" */ '@/views/analyze')
    }
  ]
}
