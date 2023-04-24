// import Vue from 'vue'
// import {VueRouter} from 'vue-router'
// import MyPosts from './views/MyPosts.vue'

// Vue.use(VueRouter)

// export default new VueRouter({
//     //The default mode for vue router is hash mode.
//     //It uses a URL hash to simulate a full URL so that the page won't be rendered
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes: [
//     {
//         path: '/',
//         name: 'posts',
//         component: MyPosts,
//     },
//     ]
// })

import { createRouter, createWebHistory } from 'vue-router';
import MyPosts from './views/MyPosts.vue';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: MyPosts,
    },
  ],
});
