<template>
  <div class="testimonials-section">
    <!-- 标题 -->
    <div class="section-title">
      <h3>What People are Saying</h3>
      <h1>"Our Guests Love It"</h1>
    </div>

    <!-- 轮播容器 -->
    <div class="testimonials-container">
      <!-- 左右箭头（仅桌面显示） -->
      <button
        
        class="nav-button left"
        @click="prevPage"
        aria-label="Previous testimonial"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- 卡片区域 -->
      <div class="cards-wrapper">
        <div
          v-for="(testimonial, index) in currentPageTestimonials"
          :key="testimonial.id"
          class="testimonial-card"
        >
          <div class="card-content">
            <div class="stars">
              <span v-for="star in 5" :key="star" class="star">★</span>
            </div>
            <p>{{ testimonial.text }}</p>
          </div>
          <div class="user-info">
            <img :src="testimonial.flag" :alt="testimonial.country" class="flag-icon" />
            <div class="user-name">{{ testimonial.name }}</div>
            <div class="user-country">{{ testimonial.country }}</div>
          </div>
        </div>
      </div>

      <button
       
        class="nav-button right"
        @click="nextPage"
        aria-label="Next testimonial"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- 圆点指示器（始终显示） -->
    <div class="dots">
      <span
        v-for="page in totalPages"
        :key="page"
        :class="{ 'active': currentPage === page - 1 }"
        @click="goToPage(page - 1)"
        :aria-label="`Go to page ${page}`"
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
      autoPlayDelay: 5000,
      isMobile: false,
      testimonials: [
        { id: 1, text: "Such a fun tour. The scallion pancake stall alone was worth it — seriously the best one I’ve ever had. The guide kept things light and told a lot of cool little stories about the city. Felt more like hanging out with a local than being on a tour.", name: "Jack", country: "Australia", flag: "https://flagcdn.com/w20/au.png" },
        { id: 2, text: "Loved this day so much. Helping with the pandas was adorable and honestly kind of surreal. Then we walked through Kuan-Zhai Alleys and it was super chill. My kid had a blast too, which made it even better.", name: "Emma", country: "Netherlands", flag: "https://flagcdn.com/w20/nl.png" },
        { id: 3, text: "Great experience all around. The pandas were super cute, but the tea-picking at Mengding Mountain was my favorite part. Really peaceful, and I even learned that matcha originally came from China — never knew that!", name: "Martina", country: "Spain", flag: "https://flagcdn.com/w20/es.png" },
        { id: 4, text: "Really glad I did this trip. Hard to believe the place is just a couple hours from Chengdu because the snow views at Riyueping were insane. The cable car ride was gorgeous — totally worth it.", name: "Paul", country: "Germany", flag: "https://flagcdn.com/w20/de.png" },
        { id: 5, text: "Beautiful village and such friendly people. The food was awesome too. I especially liked the cultural workshops — they made the whole experience feel personal and meaningful.", name: "James", country: "USA", flag: "https://flagcdn.com/w20/us.png" },
        { id: 6, text: "Really enjoyed this visit. The old bridges and canals were super charming, and the whole town had that calm Jiangnan vibe. The boat ride was the perfect way to end the day.", name: "Jean", country: "France", flag: "https://flagcdn.com/w20/fr.png" }
      ]
    };
  },
  computed: {
    itemsPerPage() {
      return this.isMobile ? 1 : 3;
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
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
      // 重置 currentPage 以防 itemsPerPage 变化导致越界
      if (this.currentPage >= this.totalPages) {
        this.currentPage = 0;
      }
    },
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
      // 仅在桌面端自动轮播（提升移动端体验）
      if (this.isMobile) return;
      this.stopAutoPlay();
      this.autoPlayInterval = setInterval(() => {
        this.nextPage();
      }, this.autoPlayDelay);
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    }
  },
  watch: {
    isMobile() {
      this.stopAutoPlay();
      if (!this.isMobile) {
        this.startAutoPlay();
      }
    }
  }
};
</script>

<style scoped>
.testimonials-section {
  background-color: #f5e9d7;
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
  left: -20px;
}

.nav-button.right {
  position: absolute;
  right: -20px;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  overflow: hidden;
}

.testimonial-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  padding: 40px;
  width: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

/* 移除动画，移动端更稳 */
.testimonial-card {
  opacity: 1;
  transform: none;
}

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

.card-content p {
  font-size: 15px;
  line-height: 1.6;
  color: #555;
  margin: 0;
  flex-grow: 1;
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
}

.dots span.active {
  background-color: #000;
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .section-title h1 {
    font-size: 24px;
  }

  .testimonial-card {
    padding: 25px;
    min-height: 300px;
  }

  .card-content p {
    font-size: 14px;
    line-height: 1.5;
  }

  .user-name {
    font-size: 15px;
  }

   .nav-button {
    width: 32px;
    height: 32px;
    display: flex !important; /* 覆盖隐藏 */
  }
  .nav-button.left {
    left: 10px;
  }
  .nav-button.right {
    right: 10px;
  }
}
</style>