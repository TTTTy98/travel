<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <Banner />

    <!-- 联系与表单提示区域 -->
    <section class="contact-section">
      <h1 class="title">
        In order to better tailor a personalized itinerary for you, please kindly provide your intended destination, travel dates, and the number of travelers.
      </h1>

      <h2 class="subtitle">Contact information：</h2>

      <div class="contact-list">
        <h3 class="contact-item">
          <a href="mailto:chengduexplorertour@gmail.com" class="contact-link">E-mail: chengduexplorertour@gmail.com</a>
        </h3>
        <h3 class="contact-item">
          <a href="https://wa.me/8613880311099" target="_blank" class="contact-link">WhatsApp: +86 138 8031 1099</a>
        </h3>
        <h3 class="contact-item">
          WeChat: 178 8200 8669
        </h3>
      </div>
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
/* 基础重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.homepage {
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
}

/* 响应式内容区域 */
.contact-section {
  padding: 2rem 1rem;
  background-color: white;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* 主标题 */
.title {
  font-size: 1.15rem;
  font-weight: bold;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* 副标题 */
.subtitle {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 1.5rem 0 1rem;
}

/* 联系方式列表 */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.contact-item {
  font-size: 1rem;
  color: #555;
  margin: 0;
  word-break: break-word; /* 长文本换行 */
}

.contact-link {
  color: #0077cc;
  text-decoration: none;
  font-size: 1rem;
}

.contact-link:hover {
  text-decoration: underline;
}

/* 移动端优化：小屏幕 */
@media (max-width: 480px) {
  .title {
    font-size: 1rem;
    line-height: 1.5;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .contact-item {
    font-size: 0.95rem;
  }

  .contact-section {
    padding: 1.5rem 0.8rem;
  }
}

/* 平板或中等屏幕 */
@media (min-width: 768px) {
  .title {
    font-size: 1.4rem;
  }

  .subtitle,
  .contact-item {
    font-size: 1.2rem;
  }
}
</style>