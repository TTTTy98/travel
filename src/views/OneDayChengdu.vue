<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    
    <section class="tours-section">
      <div class="card-grid">
        <el-row :gutter="20">
          <!-- 使用响应式 span：xs=24（手机1列），sm=12（平板2列），md=8（小桌面3列），lg=6（大桌面4列） -->
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            v-for="item in items"
            :key="item.id"
          >
            <router-link :to="`/DetailCd/${item.id}`" class="card-link">
              <el-card :body-style="{ padding: '0px' }" shadow="hover" class="tour-card">
                <img :src="item.image" class="card-image" :alt="item.title" />
                <div class="card-content">
                  <div class="title">{{ item.title }}</div>
                  <div class="price-info">
                    <div class="price-item">${{ formatPrice(item.adultPrice) }}/Pax</div>
                  </div>
                  <div class="age-note">
                    Adult ages 13 and above, Child ages 4–12
                  </div>
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TourCd1 from '@/assets/TourCd1.jpg';
import TourCd2 from '@/assets/TourCd2.jpg';
import TourCd3 from '@/assets/TourCd3.jpg';
import TourCd4 from '@/assets/TourCd4.jpg';
import TourCd5 from '@/assets/TourCd5.jpg';
import TourCd6 from '@/assets/TourCd6.jpg';
import TourCd7 from '@/assets/TourCd7.jpg';
import TourCd8 from '@/assets/TourCd8.jpg';
import TourCd9 from '@/assets/TourCd9.jpg';
import TourCd10 from '@/assets/TourCd10.jpg';
import TourCd11 from '@/assets/TourCd11.jpg';
import TourCd12 from '@/assets/TourCd12.jpg';
import TourCd13 from '@/assets/TourCd13.jpg';
import Footer from "@/components/Footer.vue";

export default {
  name: "ChengduTours", // 建议改名，但非必需
  components: {
    Header,
    Footer
  },
  data() {
    return {
      items: [
        { id: 1, title: "Chengdu: Home of Kung Fu Panda — Pandas, Martial Arts & Tai Chi Wonders", adultPrice: 255, image: TourCd1 },
        { id: 2, title: "Panda Volunteer Experience & Kuanzhai Alley Exploration", adultPrice: 255, image: TourCd2 },
        { id: 3, title: "Chengdu to Tibetan Village: Experience a Day in Tibetan Life", adultPrice: 215, image: TourCd3 },
        { id: 4, title: "Xiling Snow Mountain: Day Tour of Adventure and Beauty", adultPrice: 215, image: TourCd4 },
        { id: 5, title: "Leshan Giant Buddha & Pandas: A Day of Wonder", adultPrice: 165, image: TourCd5 },
        { id: 6, title: "Tea Picking & Panda Encounters in the Unspoiled", adultPrice: 155, image: TourCd6 },
        { id: 7, title: "Discover Wolong, Blue Tears & Zhongshu: Chengdu’s Secret Gems", adultPrice: 145, image: TourCd7 },
        { id: 8, title: "Mount Qingcheng & Panda Valley Day Tour", adultPrice: 125, image: TourCd8 },
        { id: 9, title: "Emei Mountain & Ancient Town of Huanglongxi", adultPrice: 125, image: TourCd9 },
        { id: 10, title: "Discover the Snowy Magic of Bipenggou in One Day", adultPrice: 125, image: TourCd10 },
        { id: 11, title: "Chengdu: A Journey Through Culture & Tradition", adultPrice: 295, image: TourCd11 },
        { id: 12, title: "Zen Escape: A Journey into Mindful Serenity", adultPrice: 155, image: TourCd12 },
        { id: 13, title: "Discover Siguniang Mountain: One-Day Adventure", adultPrice: 109, image: TourCd13 },
      ]
    };
  },
  methods: {
    formatPrice(price) {
      return Number(price).toFixed(2);
    }
  }
};
</script>

<style scoped>
.homepage {
  font-family: 'Arial', sans-serif;
}

.tours-section {
  padding: 30px 15px; /* 移动端 15px，桌面端由 Element gutter 控制 */
  background-color: white;
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.tour-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.tour-card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 220px; /* 移动端友好高度 */
  object-fit: cover;
}

.card-content {
  padding: 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 8px;
  color: #333;
  line-height: 1.4;
  min-height: 42px; /* 保证2行高度一致 */
}

.price-info {
  margin: 6px 0;
  font-size: 14px;
  color: #d4a574;
  font-weight: bold;
}

.age-note {
  font-size: 11px;
  color: #999;
  line-height: 1.4;
}

/* 平板及以上：图片更高 */
@media (min-width: 768px) {
  .card-image {
    height: 280px;
  }

  .title {
    font-size: 16px;
    min-height: 48px;
  }
}

/* 桌面端 */
@media (min-width: 1024px) {
  .card-image {
    height: 320px;
  }

  .tours-section {
    padding: 40px 20px;
  }
}
</style>