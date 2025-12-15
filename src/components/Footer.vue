<template>
  <footer class="site-footer">
    <div class="footer-container">
      <!-- 联系我们 -->
      <div class="footer-column contact">
        <h3>Contact us</h3>
        <!-- <div class="wechat-section">
          <h4>Wechat</h4>
          <img src="https://via.placeholder.com/150?text=WeChat+QR+Code" alt="WeChat QR Code" class="qr-code" />
        </div> -->
        <div class="contact-info">
          <p>- <strong>Wechat:</strong> 15840322048</p>
          <p>- <strong>Email:</strong> chinavoyagetrip@gmail.com</p>
          <p>- <strong>Whatsapp:</strong> +86 18940906520</p>
        </div>
        <!-- <div class="social-icons">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="TripAdvisor"><i class="fab fa-tripadvisor"></i></a>
        </div> -->
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
           <router-link to="/About"><li>About us</li></router-link>
       
        </ul>
       
      </div>

      <!-- 问题咨询 -->
      <!-- <div class="footer-column questions">
        <h3>Have questions?</h3>
        <p>Please leave your questions below and we will respond in 12 hours.</p>
        <form @submit.prevent="handleSubmit">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div> -->
    </div>
    <div class="footer-bottom">
      <!-- <p>&copy; 2025 Eastbound and Beyond. All rights reserved.</p> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    handleSubmit() {
      // 这里可以添加表单提交逻辑
      alert('Thank you for your message! We will get back to you soon.');
    }
  }
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
  justify-content: space-between;
  max-width: 1150px;
  margin: 0 auto;
  gap: 70px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.footer-column h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #fff;
}

.footer-column h4 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #d4a574;
}

/* 联系我们 */
.contact .wechat-section {
  margin-bottom: 20px;
}

.contact .qr-code {
  width: 120px;
  height: 120px;
  border: 2px solid #d4a574;
  border-radius: 8px;
  object-fit: cover;
}

.contact .contact-info p {
  margin: 8px 0;
  line-height: 1.5;
}

.contact .social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.contact .social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.contact .social-icons a:hover {
  background-color: #d4a574;
  color: #111;
}

/* 旅游项目和公司信息 */
.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 10px;
}

.footer-column a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #d4a574;
}

/* 问题咨询 */
.questions p {
  margin-bottom: 20px;
  line-height: 1.5;
}

.questions form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.questions input,
.questions textarea {
  padding: 12px;
  border: 1px solid #444;
  background-color: #222;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.questions input:focus,
.questions textarea:focus {
  outline: none;
  border-color: #d4a574;
}

.questions button {
  padding: 12px;
  background-color: white;
  color: #111;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.questions button:hover {
  background-color: #d4a574;
  color: white;
}

/* 底部版权 -->
.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
  margin-top: 30px;
  font-size: 12px;
  color: #888;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-column {
    min-width: 250px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    gap: 15px;
  }

  .footer-column {
    min-width: 200px;
    flex: 1 1 100%;
  }

  .contact .qr-code {
    width: 100px;
    height: 100px;
  }

  .questions form {
    gap: 8px;
  }

  .questions input,
  .questions textarea {
    padding: 10px;
    font-size: 13px;
  }

  .questions button {
    padding: 10px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 10px;
  }

  .footer-column {
    min-width: 100%;
    flex: 1 1 100%;
  }

  .contact .qr-code {
    width: 80px;
    height: 80px;
  }

  .contact .social-icons {
    gap: 10px;
  }

  .contact .social-icons a {
    width: 32px;
    height: 32px;
  }

  .questions p {
    font-size: 14px;
  }

  .questions input,
  .questions textarea {
    padding: 8px;
    font-size: 12px;
  }

  .questions button {
    padding: 8px;
    font-size: 13px;
  }
}
</style>