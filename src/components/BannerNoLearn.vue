<template>
     <section class="banner">
      <div class="carousel" :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
        <div v-for="(item, index) in bannerItems" :key="index" class="carousel-item">
          <img :src="item.image" alt="Banner" class="banner-image" />
          <div :class="['banner-text', { 'animate-text': currentIndex === index }]" v-if="currentIndex === index">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
          
          </div>
        </div>
      </div>

      <div class="carousel-indicators">
        <div v-for="(item, index) in bannerItems" :key="index"
          :class="['indicator', { 'active': currentIndex === index }]" @click="goToSlide(index)"></div>
      </div>
    </section>
</template>

<script>
import banner1 from '@/assets/banner1.jpg';
import banner2 from '@/assets/banner2.jpg';
import banner3 from '@/assets/banner3.jpg';
export default {
  name: "Banner",

  data() {
    return {
      bannerItems: [
        {
          image: banner1,
          title: 'China Vovage',
          description: 'China Vovage,',
        },
        {
          image: banner2,
          title: 'china visa free',
          description: '',
        },
        {
          image: banner3,
          title: 'china visa free',
          description: '',
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
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.bannerItems.length;
      }, 10000); // 每10秒切换一次
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
/* 原有样式直接复制即可 */
.banner {
  position: relative;
  text-align: center;
  color: white;
  overflow: hidden;
}
.carousel {
  display: flex;
  transition: transform 1s ease;
}
.carousel-item {
  flex: 0 0 100%;
  position: relative;
}
.banner-image {
  width: 100%;
  height: 700px;
  object-fit: cover;
}
.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  opacity: 0;
}
.banner-text h1 {
  font-size: 48px;
  font-weight: bold;
}
.banner-text p {
  font-size: 20px;
}
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
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
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.animate-text {
  animation: fadeIn 3s forwards;
}
</style>
