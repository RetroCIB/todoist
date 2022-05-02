import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: require('./../views/HomeView').default,
  },
  {
    path: '/about',
    name: 'about',
    component: require('./../views/AboutView').default,
  },



  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: require('./../views/InboxView').default,
  },
  {
    path: '/today',
    name: 'today',
    component: require('./../views/TodayView').default,
  },
  {
    path: '/upcoming',
    name: 'upcoming',
    component: require('./../views/UpcomingView').default,
  }
]

const router = new VueRouter({
  routes
})

export default router
