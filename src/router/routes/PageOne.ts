export default [
  {
    path: '/PageOne',
    name: 'PageOne',
    component: () => import(/* webpackChunkName: "about" */ '../../pages/PageOne/index.vue'),
    meta: {
      title: "PageOne"
    }
  },
]