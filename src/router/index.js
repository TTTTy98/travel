import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history', // 使用 history 模式
  // --- 添加以下 scrollBehavior 配置 ---
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（例如浏览器的前进/后退按钮），则滚动到该位置
    if (savedPosition) {
      return savedPosition;
    } else {
      // 否则，始终滚动到新页面的顶部
      return { x: 0, y: 0 };
    }
  },
  // --- 配置结束 ---
  routes: [
    {
      path: '/',
      name: 'Home',
      // 使用懒加载方式引入组件
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/Learn',
      name: 'Learn',
      component: () => import('@/views/Learn.vue') // 懒加载方式
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('@/views/About.vue') // 懒加载方式
    },
    {
      path: '/OneTour',
      name: 'OneTour',
      component: () => import('@/views/OneTour.vue') // 懒加载方式
    },
    {
      path: '/Custom',
      name: 'Custom',
      component: () => import('@/views/Custom.vue') // 懒加载方式
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue') // 懒加载方式
    },
    {
       path: '/DetailSh/:id',
      name: 'DetailSh',
      component: () => import('@/views/DetailSh.vue') // 懒加载方式
    },
    {
       path: '/DetailCd/:id',
      name: 'DetailCd',
      component: () => import('@/views/DetailCd.vue') // 懒加载方式
    },
    {
      path: '/OneDayShanghai',
      name: 'OneDayShanghai',
      component: () => import('@/views/OneDayShanghai.vue')
    },
    {
      path: '/OneDayChengdu',
      name: 'OneDayChengdu',
      component: () => import('@/views/OneDayChengdu.vue')
    }
  ]
});