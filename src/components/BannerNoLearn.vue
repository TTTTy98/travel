<template>
  <section class="banner" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <!-- 轮播内容 -->
    <div
      class="carousel"
      :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }"
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
        </div>
      </div>
    </div>

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
      ],
      currentIndex: 0,
      timer: null,
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
  },
  methods: {
    startCarousel() {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.bannerItems.length;
      }, 10000);
    },
    goToSlide(index) {
      this.currentIndex = index;
      // 重置自动播放
      if (this.timer) clearInterval(this.timer);
      this.startCarousel();
    },
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    handleTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].clientX;
      const diff = this.touchStartX - this.touchEndX;

      if (diff > 50) {
        this.goToSlide((this.currentIndex + 1) % this.bannerItems.length); // 左滑 → 下一张
      } else if (diff < -50) {
        this.goToSlide((this.currentIndex - 1 + this.bannerItems.length) % this.bannerItems.length); // 右滑 → 上一张
      }
    },
  },
};
</script>

<style scoped>
/* 主容器 */
.banner {
  position: relative;
  text-align: center;
  color: white;
  overflow: hidden;
  width: 100%;
  height: 600px; /* 默认高度 */
}

/* 轮播容器 */
.carousel {
  display: flex;
  width: 100%;
  transition: transform 0.8s ease;
  height: 100%;
}

/* 单个轮播项 */
.carousel-item {
  flex: 0 0 100%;
  position: relative;
}

/* 背景图片 */
.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持比例，裁剪溢出 */
}

/* 文字内容 */
.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  opacity: 0;
  z-index: 2;
  max-width: 90%;
  width: 100%;
}

.banner-text h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.2;
}

.banner-text p {
  font-size: 20px;
  margin-bottom: 0;
  line-height: 1.4;
}

/* 淡入动画 */
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
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: white;
  transform: scale(1.2);
}

/* ========================================
   响应式设计：移动端适配
   ======================================== */

/* 平板 & 小屏幕 */
@media (max-width: 768px) {
  .banner {
    height: 400px; /* 减小高度 */
  }

  .banner-text h1 {
    font-size: 32px;
  }

  .banner-text p {
    font-size: 16px;
  }

  .indicator {
    width: 10px;
    height: 10px;
  }

  .carousel-indicators {
    bottom: 15px;
  }
}

/* 手机小屏（如 iPhone SE） */
@media (max-width: 480px) {
  .banner {
    height: 350px;
  }

  .banner-text h1 {
    font-size: 28px;
  }

  .banner-text p {
    font-size: 14px;
  }

  .indicator {
    width: 8px;
    height: 8px;
  }
}

/* 超小高度设备（横屏手机） */
@media (max-height: 500px) and (max-width: 900px) {
  .banner {
    height: 300px;
  }

  .banner-text h1 {
    font-size: 24px;
  }

  .banner-text p {
    font-size: 13px;
  }
}
</style>