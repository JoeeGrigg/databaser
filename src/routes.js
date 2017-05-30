import VueRouter from 'vue-router'

let routes = [

  {
    path: '/',
    redirect: '/connections'
  },
  {
    path: '/connections',
    component: require('./views/connections/Index.vue')
  },
  {
    path: '/connections/new',
    component: require('./views/connections/New.vue')
  },
  {
    path: '/connections/edit/:uuid',
    component: require('./views/connections/Edit.vue')
  },
  {
    path: '/connections/connect/:uuid',
    component: require('./views/connections/Connect.vue')
  },
  {
    path: '/server',
    component: require('./views/server/Index.vue')
  }

]

export default new VueRouter({

  routes,

  linkActiveClass: 'is-active'

})
