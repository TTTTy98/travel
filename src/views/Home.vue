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

    <!-- Why Travel with Us 区域 -->
    <section class="whyArea">
      <h1>Why Travel with Us</h1>
      <p>
        We are an elite team specializing in deep-dive tours of Chengdu and Guangzhou, made up of local experts with
        overseas study and international work experience. Years of living and working in Europe,
        North America, and Australia have given us a profound understanding of what international
        travelers need and expect. At the same time, we remain rooted in China—drawing
        inspiration from its rich cultural heritage and perfectly blending authentic local experiences
        with a global perspective—dedicated to offering you truly distinctive journeys.
      </p>
      <router-link to="/About" class="about-link">
        <div class="aboutBtn"></div>
      </router-link>
      <div class="endImg"></div>
    </section>

    <!-- 移动端返回顶部按钮 -->
    <router-link to="#" class="back-to-top" @click.native="scrollToTop"></router-link>
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
        { src: gallery1, title: "Chengdu: Kung Fu Pan", description: "Start from $259/pax" },
        { src: gallery2, title: "Cultural Walk", description: "Start from $259/pax" },
        { src: gallery3, title: "Tea Ceremony", description: "Start from $259/pax" },
        { src: gallery4, title: "Street Food Tour", description: "Start from $259/pax" },
        { src: gallery5, title: "Landscape Escape", description: "Start from $259/pax" },
        { src: gallery6, title: "Heritage Village", description: "Start from $259/pax" }
      ]
    };
  },
  methods: {
    scrollToTop(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.homepage {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
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
  padding: 0 15px;
}

.gallery-item {
  flex: 0 0 30%;
  max-width: 30%;
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
}

.image-overlay {
  position: relative;
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
  justify-content: center;
  align-items: center;
}

.gallery-item:hover .overlay-content,
.gallery-item:active .overlay-content {
  opacity: 1;
}

/* Why Travel with Us 区域 */
.whyArea {
  padding: 40px 20px;
  text-align: center;
  background-color: #f8f8f8;
}

.whyArea h1 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
}

.whyArea p {
  font-size: 20px;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 20px;
}

.about-link {
  display: block;
  text-align: center;
}

.aboutBtn {
  background: url('@/assets/jiantou.png') no-repeat;
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
  margin: 20px auto;
  cursor: pointer;
  animation: bounce 2s infinite;
  transition: background 0.3s ease;
}

.aboutBtn:hover {
  background-image: url('@/assets/jiantouhover.png');
}

.endImg {
  background: url('@/assets/end.jpg') no-repeat center center;
  background-size: cover;
  margin-top: 20px;
  width: 100%;
  height: 400px;
}

/* 返回顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  z-index: 100;
}

/* 滚动一定距离后显示 */
.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

/* 动画效果 */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-text {
  animation: fadeIn 3s forwards;
}

/* ========================================
   响应式设计：移动端适配
   ======================================== */

/* 屏幕宽度 <= 768px（平板、手机） */
@media (max-width: 768px) {
  .gallery-item {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .gallery-item img {
    height: 200px;
  }

  .overlay-content {
    width: 90%;
    height: 90%;
    padding: 15px;
  }

  .overlay-content h3 {
    font-size: 18px;
  }

  .overlay-content p {
    font-size: 14px;
  }

  .whyArea h1 {
    font-size: 24px;
  }

  .whyArea p {
    font-size: 16px;
    line-height: 1.6;
  }

  .endImg {
    height: 250px;
    background-size: cover;
  }

  .back-to-top {
    display: block; /* 启用返回顶部按钮 */
  }
}

/* 屏幕宽度 <= 480px（小手机） */
@media (max-width: 480px) {
  .whyArea h1 {
    font-size: 20px;
  }

  .whyArea p {
    font-size: 14px;
    line-height: 1.5;
  }

  .gallery-item img {
    height: 180px;
  }

  .aboutBtn {
    width: 36px;
    height: 36px;
  }

  .endImg {
    height: 200px;
  }
}
</style>