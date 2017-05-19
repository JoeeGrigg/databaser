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
  }

]

export default new VueRouter({

  routes,

  linkActiveClass: 'is-active'

})
