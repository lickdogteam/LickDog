import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/mainPage.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('./views/reservation.vue')
    },
      {
          path: '/hospitalDetail',
          name: 'hospitalDetail',
          component: () => import('./views/hospitalDetail.vue')
      },
      {
          path: '/doctorDetail',
          name: 'doctorDetail',
          component: () => import('./views/doctorDetail.vue')
      },
  ]
})
