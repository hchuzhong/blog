import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index.vue"
import Login from "../views/Login.vue"
import Create from "../views/Create.vue"
import Detail from "../views/Detail.vue"
import Edit from "../views/Edit.vue"
import My from "../views/My.vue"
import Register from "../views/Register.vue"
import User from "../views/User.vue"
import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/my',
    component: My,
    meta: { requiresAuth: true }
  },
  {
    path: '/create',
    component: Create,
    meta: { requiresAuth: true }
  },
  {
    path: '/detail/:blogId',
    component: Detail,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit/:blogId',
    component: Edit,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:userId',
    component: User
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router
