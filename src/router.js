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
      path: '/hospitalDetail',
      name: 'hospitalDetail',
      component: () => import('./views/hospitalDetail.vue')
    },
    {
      path: '/doctorDetail',
      name: 'doctorDetail',
      component: () => import('./views/doctorDetail.vue')
    },
    {
      path: '/record',
      name: 'record',
      component: () => import('./views/record/index.vue')
    },
    {
      path: '/record/edit',
      name: 'recordEdit',
      component: () => import('./views/record/addAndEdit.vue')
    },
    {
      path: '/knowlage/list',
      name: 'konwlageList',
      component: () => import('./views/knowlageList.vue')
    },
      {
          path: '/confirm',
          name: 'confirm',
          component: () => import('./views/confirm.vue')
      }
  ]
})
