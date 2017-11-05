import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Names from '@/components/Names'
import AccountDetail from '@/components/AccountDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/names',
      name: 'Names',
      component: Names
    },
    {
      path: '/account',
      name: 'AccountDetail',
      component: AccountDetail
    }
  ]
})
