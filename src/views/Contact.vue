<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <Banner />

    <!-- 联系方式区域 -->
    <section class="contact-section">
      <h3 class="contact-item">
        <a href="mailto:chengduexplorertour@gmail.com" class="contact-link">
          E-mail: chengduexplorertour@gmail.com
        </a>
      </h3>
      <h3 class="contact-item">
        <a href="tel:+8618512852813" class="contact-link">
          Phone: +86 185 1285 2813
        </a>
      </h3>
      <h3 class="contact-item">
        <a href="https://wa.me/8613880311099" target="_blank" class="contact-link">
          WhatsApp: +86 138 8031 1099
        </a>
      </h3>
      <h3 class="contact-item">
        WeChat: 178 8200 8669
      </h3>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/BannerNoLearn.vue";

export default {
  name: "About",
  components: {
    Header,
    Banner,
  },
};
</script>

<style scoped>
/* 基础重置与移动端适配 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.homepage {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  background-color: #f8f8f8;
}

/* 响应式标题和内容间距 */
.contact-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 2rem 1rem;
  gap: 1.2rem; /* 间距更自然 */
  text-align: center;
}

.contact-item {
  font-size: 1.1rem;
  color: #333;
  font-weight: normal;
  margin: 0;
}

/* 可点击链接样式 */
.contact-link {
  color: #0077cc;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}

/* 适配小屏幕（iPhone 等） */
@media (max-width: 480px) {
  .contact-item {
    font-size: 1rem; /* 更小字体 */
    line-height: 1.5;
  }

  .contact-section {
    padding: 1.5rem 0.8rem;
  }
}

/* 平板适配 */
@media (min-width: 768px) {
  .contact-item {
    font-size: 1.2rem;
  }

  .contact-section {
    padding: 2.5rem;
  }
}
</style>