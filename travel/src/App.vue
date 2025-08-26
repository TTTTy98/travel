<template>
  <div id="app">
    <!-- 引入 Header 组件（如果有的话） -->
    <!-- <Header /> -->
    
    <!-- Vue Router 用于展示当前路由对应的组件 -->
    <router-view />
    
    <!-- 引入 Footer 组件（如果有的话） -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
// 导入全局组件
// import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  // components: {
  //   Header,
  //   Footer
  // }
};
</script>

<style>
/* 这里是全局样式，也可以使用外部样式 */
#app {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  overflow-y: scroll;
}
</style>
