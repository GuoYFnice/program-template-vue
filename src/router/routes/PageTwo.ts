export default [
  {
    path: '/PageTwo',
    name: 'PageTwo',
    component: () => import(/* webpackChunkName: "about" */ '../../pages/PageTwo/index.vue'),
    meta: {
      title: "PageTwo"
    }
  },
]