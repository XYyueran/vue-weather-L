import Vue from 'vue'
import Router from 'vue-router'
import weatherS from '@/components/weatherS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'weatherS',
      component: weatherS
    }
  ]
})
