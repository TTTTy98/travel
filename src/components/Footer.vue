<template>
  <footer class="site-footer">
    <div class="footer-container">
      <!-- 联系我们 -->
      <div class="footer-column contact">
        <h3>Contact Us</h3>
        <div class="contact-info">
          <p><strong>WeChat:</strong> 15840322048</p>
          <p><strong>Email:</strong> chinavoyagetrip@gmail.com</p>
          <p><strong>WhatsApp:</strong> +86 189 4090 6520</p>
        </div>
      </div>

      <!-- 旅游项目 -->
      <div class="footer-column tours">
        <h3>Tours</h3>
        <ul>
      <router-link to="/DetailSh/1"><li>Taste of Tradition: Shanghai Breakfast Tour</li></router-link>
          <router-link to="/DetailCd/5"><li>Leshan Giant Buddha & Pandas: A Day of Wonder</li></router-link>
          <router-link to="/DetailCd/6"><li>Tea Picking & Panda Encounters in the Unspoiled</li></router-link>
          <router-link to="/DetailCd/8"><li>Mount Qingcheng & Panda Valley Day Tour</li></router-link>
          <router-link to="/DetailCd/9"><li>Emei Mountain & Ancient Town of Huanglongxi</li></router-link>
          <router-link to="/DetailCd/12"><li>Zen Escape: A Journey into Mindful Serenity</li></router-link>
          <router-link to="/DetailCd/13"><li>Discover Siguniang Mountain: One-Day Adventure</li></router-link>
        </ul>
      </div>

      <!-- 公司信息 -->
      <div class="footer-column company">
        <h3>Company</h3>
        <ul>
          <li><router-link to="/About">About Us</router-link></li>
        </ul>
      </div>
    </div>

    <!-- 底部版权（可选，你已注释） -->
    <!--
    <div class="footer-bottom">
      <p>&copy; 2025 Eastbound and Beyond. All rights reserved.</p>
    </div>
    -->
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.site-footer {
  background-color: #111;
  color: white;
  padding: 40px 20px 20px;
  font-family: 'Arial', sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1150px;
  margin: 0 auto;
  gap: 30px 50px;
}

.footer-column {
  flex: 1 1 280px; /* 最小 280px，允许收缩 */
}

.footer-column h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
}

/* 联系信息 */
.contact-info p {
  margin: 8px 0;
  line-height: 1.6;
  font-size: 15px;
}

/* 链接列表 */
.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 10px;
  line-height: 1.5;
}

.footer-column a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.2s ease;
  display: block; /* 扩大点击区域 */
  padding: 6px 0;
  font-size: 15px;
}

.footer-column a:hover {
  color: #d4a574;
}

/* 底部版权 */
.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
  margin-top: 30px;
  font-size: 12px;
  color: #888;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .footer-container {
    gap: 25px;
  }

  .footer-column {
    flex: 1 1 100%; /* 每列占满一行 */
  }

  .contact-info p {
    font-size: 14px;
  }

  .footer-column a {
    font-size: 14px;
    padding: 5px 0;
  }

  /* 缩短标题间距 */
  .footer-column h3 {
    margin-bottom: 16px;
    font-size: 17px;
  }
}

@media (max-width: 480px) {
  .site-footer {
    padding: 30px 15px 15px;
  }

  .contact-info p {
    font-size: 13px;
  }

  .footer-column a {
    font-size: 13px;
  }

  /* WhatsApp 号码添加空格提升可读性 */
  /* 已在模板中处理 */
}
</style>