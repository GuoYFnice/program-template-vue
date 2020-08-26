import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import PageOne from "./routes/PageOne";
import PageTwo from "./routes/PageTwo";

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      ...PageOne,
      ...PageTwo,
      {
        path: "/",
        component: () => import("@/pages/PageOne/index.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
