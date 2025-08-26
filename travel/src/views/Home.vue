<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <Banner />


    <!-- 轮播图下方图片 -->
    <section class="image-gallery">
      <div class="gallery-container">
        <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
          <router-link to="/Detail">
          <div class="image-overlay">
            <img :src="image.src" alt="Gallery Image" />
            <div class="overlay-content">
              <h3>{{ image.title }}</h3>
              <p>{{ image.description }}</p>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="whyArea">
      <h1 style="font-size: 30px;font-weight: bold;">Why Travel with Us</h1>
      <p style="font-size: 20px;">We are an elite team
        specializing in deep-dive tours of Chengdu and Guangzhou, made up of local experts with
        overseas study and international work experience. Years of living and working in Europe,
        North America, and Australia have given us a profound understanding of what international
        travelers need and expect. At the same time, we remain rooted in China—drawing
        inspiration from its rich cultural heritage and perfectly blending authentic local experiences
        with a global perspective—dedicated to offering you truly distinctive journeys.</p>
      <router-link to="/About" style="color: white; text-decoration: none;">
        <div class="aboutBtn"></div>
      </router-link>
      <div class="endImg"></div>
    </section>
  </div>
</template>

<script>

import gallery1 from '@/assets/gallery1.jpg';
import gallery2 from '@/assets/gallery2.jpg';
import gallery3 from '@/assets/gallery3.jpg';
import gallery4 from '@/assets/gallery4.jpg';
import gallery5 from '@/assets/gallery5.jpg';
import gallery6 from '@/assets/gallery6.jpg';
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Banner
  },
  data() {
    return {

      galleryImages: [
        { src: gallery1, title: "chengdu：kung fu pan", description: "Start from $259/pax" },
        { src: gallery2, title: "Gallery BBBBBBB", description: "Start from $259/pax" },
        { src: gallery3, title: "Gallery CCCCCCC", description: "Start from $259/pax" },
        { src: gallery4, title: "Gallery DDDDDDD", description: "Start from $25911/pax" },
        { src: gallery5, title: "Gallery EEEEEEE", description: "Start from $259/pax" },
        { src: gallery6, title: "Gallery FFFFFFF", description: "Start from $259/pax" }
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    // this.startCarousel();
  },
  methods: {


  },
};
</script>

<style scoped>
.homepage {
  font-family: 'Arial', sans-serif;
}








/* 动画效果 */
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
  /* 动画只播放一次 */
}

/* 轮播图下方图片 */
.image-gallery {
  padding: 40px 0;
  text-align: center;
}

.gallery-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  /* 当屏幕较小时自动换行 */
}

.gallery-item {
  flex: 0 0 30%;
  position: relative;
  margin-bottom: 20px;
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.gallery-item:hover img {
  transform: scale(1.05);
  /* 放大效果 */
}

.image-overlay {
  position: relative;
}

.image-overlay img {
  border-radius: 10px;
}

.overlay-content {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  /* 使内容垂直排列 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
  /* 水平居中 */
}

.gallery-item:hover .overlay-content {
  opacity: 1;
  /* 鼠标悬停时显示 */
}

.whyArea {
  padding: 0px 500px;
}

.aboutBtn {
  background: url('@/assets/jiantou.png');
  ;
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
  margin-top: 20px;
  animation: bounce 2s infinite;

}

.aboutBtn:hover {
  background: url('@/assets/jiantouhover.png');
  ;
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.endImg {
  background: url('@/assets/end.jpg');
  ;
  background-size: 100% 100%;
  margin-top: 20px;
  width: 100%;
  height: 400px;
}
</style>
