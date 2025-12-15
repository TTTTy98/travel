<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <Banner />

    <!-- 轮播图下方图片 -->
    <section class="image-gallery">
      <div class="gallery-container">
        <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
          <router-link :to="`/Detail${image.type === 'cd' ? 'Cd' : 'Sh'}/${image.id}`">
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
        We are a team of friends with  <span class="bold-text">international backgrounds </span>and a shared <span class="bold-text">passion for travel.</span>
      </p>
      <p>Shaped by our upbringing in China, enriched by studies at top universities in Europe and the U.S., and
        broadened by work and life experiences around the world, we have a unique insight into what foreign travelers
        really need when discovering China.</p>
      <p>Wherever we are, one thing never changes: our love for exploring the world. We believe travel is not just about
        reaching a destination, but about connecting with culture and people.</p>
      <router-link to="/About" class="about-link">
        <div class="aboutBtn"></div>
      </router-link>
      <!-- <div class="endImg"></div> -->
    </section>
    <!-- 评论 -->
    <Evaluation />
     <!-- 底部-->
   <Footer />
    <!-- 移动端返回顶部按钮 -->
    <router-link to="#" class="back-to-top" @click.native="scrollToTop"></router-link>
  </div>
</template>

<script>
import Tour1 from '@/assets/Tour1.jpg';
import Tour2 from '@/assets/Tour2.jpg';
import Tour3 from '@/assets/Tour3.jpg';
import TourCd1 from '@/assets/TourCd1.jpg';
import TourCd2 from '@/assets/TourCd2.jpg';
import TourCd3 from '@/assets/TourCd3.jpg';
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Evaluation from "@/components/Evaluation.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Banner,
    Evaluation,
    Footer
  },
  data() {
    return {
      galleryImages: [
        // 上海 (Shanghai)
        { src: Tour1, title: "Taste of Tradition: Shanghai Breakfast Tour", description: "Start from $60/pax", type: 'sh', id: 1 },
        { src: Tour2, title: "Fengjing Watertown: A Journey into Shanghai’s Hidden Waterways", description: "Start from $159/pax", type: 'sh', id: 2 },
        { src: Tour3, title: "Zhujiajiao Watertown: Historic Water Town & Canal Cruise", description: "Start from $169/pax", type: 'sh', id: 3 },
        // 成都 (Chengdu)
        { src: TourCd1, title: "Chengdu: Home of Kung Fu Panda — Pandas, Martial Arts & Tai Chi Wonders", description: "Start from $255/pax", type: 'cd', id: 1 },
        { src: TourCd2, title: "Panda Volunteer Experience & Kuanzhai Alley Exploration", description: "Start from $255/pax", type: 'cd', id: 2 },
        { src: TourCd3, title: "Chengdu to Tibetan Village: Experience a Day in Tibetan Life", description: "Start from $215/pax", type: 'cd', id: 3 }
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
.bold-text {
  font-weight: bold;
  color: #d4a574;
  /* 可选：用品牌色突出关键信息 */
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

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
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
    display: block;
    /* 启用返回顶部按钮 */
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