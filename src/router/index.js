import Vue from 'vue'
import Router from 'vue-router'
import Names from '@/components/Names'
import AccountDetail from '@/components/AccountDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: '/names'
    },
    {
      path: '/names',
      name: 'Names',
      component: Names
    },
    {
      path: '/account/:username',
      name: 'AccountDetail',
      component: AccountDetail
    }
  ]
})
