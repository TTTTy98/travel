<template>
  <header>
    <!-- 顶部联系信息栏 -->
    <div class="header">
      <div class="logo"></div>
      <div class="header-content">
        <span>Email: gzwukong@outlook.com</span>
        <span>WhatsApp: +8619966270998</span>
        <span>WxChat: aaaa</span>
      </div>

      <!-- 汉堡菜单按钮（仅在移动端显示） -->
      <div class="hamburger" @click="toggleMenu">
        <div :class="['bar', menuOpen ? 'open' : '']"></div>
        <div :class="['bar', menuOpen ? 'open' : '']"></div>
        <div :class="['bar', menuOpen ? 'open' : '']"></div>
      </div>
    </div>

    <!-- 导航栏 -->
    <nav class="navbar" :class="{ 'mobile-active': menuOpen }">
      <ul>
        <li @click="closeMenu"><router-link to="/">Home</router-link></li>
        <li @click="closeMenu"><router-link to="/About">About Us</router-link></li>

        <!-- One Day Tours 下拉菜单 -->
        <li
          class="dropdown"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <!-- 点击切换移动端下拉 -->
          <span class="dropdown-toggle" @click="toggleDropdown">
            One Day Tours
          </span>

          <!-- 下拉子菜单 -->
          <ul
            class="dropdown-menu"
            :class="{ show: menuOpen || desktopMenuOpen || dropdownOpen }"
          >
            <li @click="closeMenu"><router-link to="/OneDay/Shanghai">Shanghai</router-link></li>
            <li @click="closeMenu"><router-link to="/OneDay/Chengdu">Chengdu</router-link></li>
          </ul>
        </li>

        <!-- 其他菜单项 -->
        <li @click="closeMenu"><router-link to="/MultiDay">Multi Day Tours</router-link></li>
        <li @click="closeMenu"><router-link to="/Custom">Custom Tour</router-link></li>
        <li @click="closeMenu"><router-link to="/Contact">Contact Us</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,           // 控制汉堡菜单展开
      desktopMenuOpen: false,    // 桌面端 hover 展开
      dropdownOpen: false,       // 移动端点击展开下拉
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.dropdownOpen = false; // 同步关闭下拉
    },
    closeMenu() {
      this.menuOpen = false;
      this.desktopMenuOpen = false;
      this.dropdownOpen = false;
    },
    toggleDropdown(e) {
      e.stopPropagation(); // 防止触发 document 的 click 关闭
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        this.dropdownOpen = !this.dropdownOpen;
      }
      // 桌面端不响应点击，由 hover 控制
    },
    handleMouseEnter() {
      if (window.innerWidth > 768) {
        this.desktopMenuOpen = true;
      }
    },
    handleMouseLeave() {
      if (window.innerWidth > 768) {
        this.desktopMenuOpen = false;
      }
    },
  },
  mounted() {
    // 点击外部关闭所有菜单
    document.addEventListener("click", (e) => {
      const header = this.$el;
      if (!header.contains(e.target)) {
        this.closeMenu();
      }
    });

    // 屏幕变大时自动关闭移动端菜单
    const resizeHandler = () => {
      if (window.innerWidth > 768) {
        this.menuOpen = false;
        this.dropdownOpen = false;
      }
    };
    window.addEventListener("resize", resizeHandler);

    // 清理事件
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", resizeHandler);
    });
  },
};
</script>

<style scoped>
/* 基础样式 */
header {
  width: 100%;
  position: relative;
  z-index: 1000;
  font-family: "Arial", sans-serif;
}

/* 顶部联系栏 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 180px;
  height: 60px;
  background: url("@/assets/logo.jpg") no-repeat center center;
  background-size: contain;
}

.header-content {
  display: flex;
  gap: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}

/* 汉堡菜单 */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
  transition: 0.3s;
  border-radius: 2px;
}

/* 汉堡菜单动画 */
.bar.open:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* 导航栏 */
.navbar {
  background-color: skyblue;
  display: flex;
  justify-content: center;
  height: 50px;
}

.navbar ul {
  list-style: none;
  display: flex;
  line-height: 50px;
  gap: 80px;
  margin: 0;
  padding: 0;
}

/* 下拉菜单样式 */
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-toggle {
  color: white;
  font-size: 16px;
  padding: 0 5px;
}

/* 下拉菜单 - 竖直排列 */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0095dd;
  min-width: 150px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0 !important;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
}

.dropdown-menu li {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dropdown-menu li:last-child {
  border-bottom: none;
}

.dropdown-menu a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 15px;
  transition: background-color 0.2s;
  width: 100%;
}

.dropdown-menu a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header {
    padding: 15px;
    justify-content: space-between;
  }

  .logo {
    width: 150px;
    height: 50px;
  }

  .header-content {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  /* 导航栏 */
  .navbar {
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.4s ease;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    background-color: skyblue;
  }

  .navbar.mobile-active {
    height: auto;
    min-height: 1px;
  }

  .navbar ul {
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .navbar.mobile-active ul {
    opacity: 1;
  }

  .navbar li {
    width: 100%;
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .navbar a {
    display: block;
    font-size: 18px;
    padding: 10px 0;
  }

  /* 移动端下拉菜单样式 */
  .dropdown {
    width: 100%;
  }

  .dropdown-toggle {
    width: 100%;
    display: block;
  }

  .dropdown-menu {
    position: static;
    transform: none;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    box-shadow: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    transition: max-height 0.3s ease, opacity 0.3s;
  }

  .dropdown-menu.show {
    opacity: 1;
    max-height: 200px;
  }
}

/* 更小屏幕 */
@media (max-width: 480px) {
  .logo {
    width: 130px;
    height: 45px;
  }

  .navbar li {
    padding: 12px 0;
  }

  .navbar a {
    font-size: 16px;
  }
}
</style>