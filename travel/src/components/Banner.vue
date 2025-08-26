<template>
  <section class="banner">
    <!-- 轮播内容 -->
    <div
      class="carousel"
      :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }"
    >
      <div
        v-for="(item, index) in bannerItems"
        :key="index"
        class="carousel-item"
      >
        <img :src="item.image" alt="Banner" class="banner-image" />
        <div
          :class="['banner-text', { 'animate-text': currentIndex === index }]"
          v-if="currentIndex === index"
        >
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
          <router-link to="/Learn" style="color: white; text-decoration: none;">
            <el-button
              type="warning"
              v-if="currentIndex === 3 || currentIndex === 4"
              round
            >
              Learn more
            </el-button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- 左右箭头按钮 -->
    <button class="carousel-btn prev" @click="prevSlide">&#10094;</button>
    <button class="carousel-btn next" @click="nextSlide">&#10095;</button>

    <!-- 指示器 -->
    <div class="carousel-indicators">
      <div
        v-for="(item, index) in bannerItems"
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
        @click="goToSlide(index)"
      ></div>
    </div>
  </section>
</template>

<script>
import banner1 from '@/assets/banner1.jpg';
import banner2 from '@/assets/banner2.jpg';
import banner3 from '@/assets/banner3.jpg';
import banner4 from '@/assets/banner4.jpg';
import banner5 from '@/assets/banner5.jpg';

export default {
  name: 'Banner',
  data() {
    return {
      bannerItems: [
        {
          image: banner1,
          title: 'China Voyage',
          description: 'Explore the beauty of China with ease.',
        },
        {
          image: banner2,
          title: 'China Visa Free',
          description: 'Travel to China without a visa – discover eligible countries.',
        },
        {
          image: banner3,
          title: 'Discover Ancient Culture',
          description: 'Walk through 5000 years of history and tradition.',
        },
        {
          image: banner4,
          title: 'Modern China',
          description: 'Experience cutting-edge cities and technology.',
        },
        {
          image: banner5,
          title: 'Natural Wonders',
          description: 'From mountains to rivers, China’s nature amazes all.',
        },
      ],
      currentIndex: 0,
      timer: null,
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    // 开始自动轮播
    startCarousel() {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, 5000); // 每5秒切换一次
    },

    // 下一张
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.bannerItems.length;
      this.resetTimer();
    },

    // 上一张
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.bannerItems.length) % this.bannerItems.length;
      this.resetTimer();
    },

    // 跳转到指定幻灯片
    goToSlide(index) {
      this.currentIndex = index;
      this.resetTimer();
    },

    // 重置自动播放计时器（提升体验）
    resetTimer() {
      clearInterval(this.timer);
      this.startCarousel();
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  text-align: center;
  color: white;
  overflow: hidden;
  width: 100%;
  height: 600px;
}

.carousel {
  display: flex;
  width: 100%;
  transition: transform 1s ease;
  height: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  position: relative;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 轮播文字样式 */
.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  opacity: 0;
  z-index: 2;
}

.banner-text h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}

.banner-text p {
  font-size: 20px;
  margin-bottom: 20px;
}

/* 文字淡入动画 */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.animate-text {
  animation: fadeIn 1.5s forwards;
}

/* 左右箭头按钮 */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.carousel-btn:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

/* 指示器 */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: white;
}

/* 响应式：小屏幕隐藏箭头或调整样式 */
@media (max-width: 768px) {
  .carousel-btn {
    display: none; /* 可选：移动端隐藏箭头 */
  }
  .banner-text h1 {
    font-size: 32px;
  }
  .banner-text p {
    font-size: 16px;
  }
}
</style>