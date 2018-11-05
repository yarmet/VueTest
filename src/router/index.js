import Vue from 'vue'
import Router from 'vue-router'
import LinkPage from '@/components/LinkPage'
import GroupsPage from '@/components/GroupsPage'
import WritePage from '@/components/WritePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LinkPage',
      component: LinkPage
    },
    {
      path: '/write',
      name: 'WritePage',
      component: WritePage
    },
    {
      path: '/groups',
      name: 'GroupsPage',
      component: GroupsPage
    }
  ],
  linkExactActiveClass: 'active'
})
