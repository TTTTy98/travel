<template>
  <div class="testimonials-section">
    <!-- 标题 -->
    <div class="section-title">
      <h3>What People are Saying</h3>
      <h1>"Our Guests Love It"</h1>
    </div>

    <!-- 轮播容器 -->
    <div class="testimonials-container" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
      <!-- 左箭头 -->
      <button class="nav-button left" @click="prevPage">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- 卡片区域 -->
      <div class="cards-wrapper">
        <!-- 使用 v-for 遍历当前页的3张卡片 -->
        <div
          v-for="(testimonial, index) in currentPageTestimonials"
          :key="testimonial.id"
          class="testimonial-card"
          :class="{ 'active': true }"
        >
          <div class="card-content">
            <!-- 星星评分 -->
            <div class="stars">
              <span v-for="star in 5" :key="star" class="star">★</span>
            </div>
            <!-- 评论内容 -->
            <p>{{ testimonial.text }}</p>
          </div>
          <!-- 用户信息 -->
          <div class="user-info">
            <img :src="testimonial.flag" :alt="testimonial.country" class="flag-icon" />
            <div class="user-name">{{ testimonial.name }}</div>
            <div class="user-country">{{ testimonial.country }}</div>
          </div>
        </div>
      </div>

      <!-- 右箭头 -->
      <button class="nav-button right" @click="nextPage">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- 圆点指示器 -->
    <div class="dots">
      <span
        v-for="page in totalPages"
        :key="page"
        :class="{ 'active': currentPage === page - 1 }"
        @click="goToPage(page - 1)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsCarousel",
  data() {
    return {
      currentPage: 0,
      autoPlayInterval: null,
      autoPlayDelay: 5000, // 5秒自动翻页
      testimonials: [
        { id: 1, text: "Such a fun tour. The scallion pancake stall alone was worth it — seriously the best one I’ve ever had. The guide kept things light and told a lot of cool little stories about the city. Felt more like hanging out with a local than being on a tour.", name: "Jack", country: "Australia", flag: "https://flagcdn.com/w20/au.png" },
        { id: 2, text: "Loved this day so much. Helping with the pandas was adorable and honestly kind of surreal. Then we walked through Kuan-Zhai Alleys and it was super chill. My kid had a blast too, which made it even better.", name: "Emma", country: "Netherlands", flag: "https://flagcdn.com/w20/nl.png" },
        { id: 3, text: "Great experience all around. The pandas were super cute, but the tea-picking at Mengding Mountain was my favorite part. Really peaceful, and I even learned that matcha originally came from China — never knew that!", name: "Martina", country: "Spain", flag: "https://flagcdn.com/w20/es.png" },
        { id: 4, text: "Really glad I did this trip. Hard to believe the place is just a couple hours from Chengdu because the snow views at Riyueping were insane. The cable car ride was gorgeous — totally worth it.", name: "Paul", country: "Germany", flag: "https://flagcdn.com/w20/de.png" },
        { id: 5, text: "Beautiful village and such friendly people. The food was awesome too. I especially liked the cultural workshops — they made the whole experience feel personal and meaningful.", name: "James", country: "USA", flag: "https://flagcdn.com/w20/us.png" },
        { id: 6, text: "Really enjoyed this visit. The old bridges and canals were super charming, and the whole town had that calm Jiangnan vibe. The boat ride was the perfect way to end the day.", name: "Jean", country: "France", flag: "https://flagcdn.com/w20/fr.png" },

      ]
    };
  },
  computed: {
    itemsPerPage() {
      return 3;
    },
    totalPages() {
      return Math.ceil(this.testimonials.length / this.itemsPerPage);
    },
    currentPageTestimonials() {
      const start = this.currentPage * this.itemsPerPage;
      return this.testimonials.slice(start, start + this.itemsPerPage);
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.stopAutoPlay();
  },
  methods: {
    nextPage() {
      this.currentPage = (this.currentPage + 1) % this.totalPages;
    },
    prevPage() {
      this.currentPage = (this.currentPage - 1 + this.totalPages) % this.totalPages;
    },
    goToPage(index) {
      if (index >= 0 && index < this.totalPages) {
        this.currentPage = index;
      }
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextPage();
      }, this.autoPlayDelay);
    },
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    }
  }
};
</script>

<style scoped>
.testimonials-section {
  background-color: #f5e9d7; /* 浅米色背景 */
  padding: 60px 20px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.section-title h3 {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.section-title h1 {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.testimonials-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.nav-button {
  background-color: #000;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.nav-button:hover {
  background-color: #333;
  transform: scale(1.1);
}

.nav-button.left {
  position: absolute;
  left: 0;
}

.nav-button.right {
  position: absolute;
  right: 0;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  overflow: hidden;
  perspective: 1000px; /* 为3D变换提供透视 */
}

.testimonial-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  padding: 40px; /* 增加内边距，让卡片更高 */
  width: calc((100% - 60px) / 3); /* 三等分空间 */
  min-height: 320px; /* 固定最小高度 */
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transition: all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* 弹性动画 */
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* 对话气泡尾巴 */
.testimonial-card::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #fff;
}

.stars {
  color: #FFD700;
  font-size: 20px;
  margin-bottom: 15px;
}

.stars .star {
  margin-right: 2px;
}

.card-content p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* 最多显示6行 */
  -webkit-box-orient: vertical;
}

.user-info {
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.flag-icon {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-right: 10px;
}

.user-name {
  font-weight: bold;
  color: #333;
  font-size: 16px;
}

.user-country {
  font-size: 12px;
  color: #888;
  margin-left: 5px;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
}

.dots span:hover {
  background-color: #999;
  transform: scale(1.2);
}

.dots span.active {
  background-color: #000;
  transform: scale(1.3);
  box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .testimonials-container {
    padding: 0 10px;
  }

  .testimonial-card {
    width: 100%;
    padding: 30px;
    min-height: auto;
    font-size: 14px;
  }

  .nav-button {
    width: 32px;
    height: 32px;
  }

  .section-title h1 {
    font-size: 24px;
  }

  .stars {
    font-size: 16px;
  }

  .cards-wrapper {
    gap: 15px;
  }

  .card-content p {
    -webkit-line-clamp: 5;
  }
}
</style>