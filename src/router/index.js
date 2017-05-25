import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const SpiderList = r => require.ensure([], () => r(require('../components/spider/spider-list.vue')), 'spider')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/spider',
      name: 'spider',
      component: SpiderList
    }
  ]
})
