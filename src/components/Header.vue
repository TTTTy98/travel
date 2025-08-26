<template>
  <header>
    <div  class="header">
    <!-- 顶部导航栏内容 -->
    <div class="logo"></div>
    <div class="header-content">
      <span style="margin-right: 20px;">Email: gzwukong@outlook.com</span>
      <span style="margin-right: 20px;">WhatsApp: +8619966270998</span>
      <span style="margin-right: 20px;">WxChat: aaaa</span>
    </div>
  </div>
    <!-- 导航栏 -->
    <nav class="navbar">
      <ul>
        <li><router-link to="/" style="color: white; text-decoration: none;">Home</router-link></li>
        <li><router-link to="/About" style="color: white; text-decoration: none;">About Us</router-link></li>
        <li><router-link to="/OneTour" style="color: white; text-decoration: none;">One Day tours</router-link></li>
        <li><router-link to="/OneTour" style="color: white; text-decoration: none;">Multi Day Tours</router-link></li>
        <li><router-link to="/Custom" style="color: white; text-decoration: none;">Custom Tour</router-link></li>
        <li><router-link to="/Contact" style="color: white; text-decoration: none;">Contact Us</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 30px 200px;
}

.logo {
  width: 300px;
  height: 100px;
  background: url("@/assets/logo.jpg") no-repeat;
  background-size: 100% 100%;
}

.header-content span {
  font-size: 18px;
  font-weight: bold;
}

.navbar {
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 100px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

</style>
