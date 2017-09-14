import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import NewTask from '@/components/NewTask'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/new-task',
      name: NewTask,
      component: NewTask
    }
  ]
})
