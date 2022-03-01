import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/FrontHomePageView.vue')
  },
  {
    path: '/productList',
    component: () => import(/* webpackChunkName: "about" */ '../views/productListView.vue')
  },
  {
    path: '/dashBoard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashBoardView.vue')
  },
  {
    path: '/cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cartListView.vue')
  },
  {
    path: '/productInfor/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/productView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
