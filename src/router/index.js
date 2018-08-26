import Vue from 'vue'
import Router from 'vue-router'
import LinkPage from '@/components/LinkPage'
import InputPage from '@/components/InputPage'
import GroupsPage from '@/components/GroupsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LinkPage',
      component: LinkPage
    },
    {
      path: '/input',
      name: 'InputPage',
      component: InputPage
    },
    {
      path: '/groups',
      name: 'GroupsPage',
      component: GroupsPage
    }
  ],
  linkExactActiveClass: 'active'
})
