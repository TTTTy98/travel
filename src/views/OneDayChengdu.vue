<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <section style="padding: 0px 200px; background-color: white;">
      <div class="card-grid">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in items" :key="item.id">
            <router-link :to="`/DetailCd/${item.id}`" style="text-decoration: none; color: inherit;">
              <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-top: 30px;">
                <img :src="item.image" class="card-image" />
                <div class="card-content">
                  <div class="title">{{ item.title }}</div>
                  <div class="price-info">
                    <div class="price-item"> ${{ formatPrice(item.adultPrice) }}/Pax</div>
                    <!-- <div class="price-item">Child: ${{ formatPrice(item.childPrice) }}/Pax</div> -->
                  </div>
                  <!-- 新增年龄说明 -->
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
<Footer  />
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
  name: "About",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Chengdu: Home of Kung Fu Panda — Pandas, Martial Arts & Tai Chi Wonders",
          adultPrice: 255,
          image: TourCd1
        },
        {
          id: 2,
          title: "Panda Volunteer Experience & Kuanzhai Alley Exploration",
          adultPrice: 255,
          image: TourCd2
        },
        {
          id: 3,
          title: "Chengdu to Tibetan Village: Experience a Day in Tibetan Life",
          adultPrice: 215,
          image: TourCd3
        },
        {
          id: 4,
          title: "Xiling Snow Mountain: Day Tour of Adventure and Beauty",
          adultPrice: 215,
          image: TourCd4
        },
         {
          id: 5,
          title: "Leshan Giant Buddha & Pandas: A Day of Wonder",
          adultPrice: 165,
          image: TourCd5
        },
        {
          id: 6,
          title: "Tea Picking & Panda Encounters in the Unspoiled",
          adultPrice: 155,
          image: TourCd6
        },
        {
          id: 7,
          title: "Discover Wolong, Blue Tears & Zhongshu: Chengdu’s Secret Gems",
          adultPrice: 145,
          image: TourCd7
        },
        
        {
          id: 8,
          title: "Mount Qingcheng & Panda Valley Day Tour",
          adultPrice: 125,
          image: TourCd8
        },
        {
          id: 9,
          title: "Emei Mountain & Ancient Town of Huanglongxi",
          adultPrice: 125,
          image: TourCd9
        },
        
        {
          id: 10,
          title: "Discover the Snowy Magic of Bipenggou in One Day",
          adultPrice: 125,
          image: TourCd10
        },
        {
          id: 11,
          title: "Chengdu: A Journey Through Culture & Tradition",
          adultPrice: 295,
          image: TourCd11
        },
        {
          id: 12,
          title: "Zen Escape: A Journey into Mindful Serenity",
          adultPrice: 155,
          image: TourCd12
        },
        {
          id: 13,
          title: "Discover Siguniang Mountain: One-Day Adventure",
          adultPrice: 109,
          image: TourCd13
        },
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

.card-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-image:hover {
  transform: scale(1.1);
}

.el-card {
  height: 550px; /* 根据内容调整，确保能容纳最长标题 */
  display: flex;
  flex-direction: column;
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
  font-size: 16px;
  margin-bottom: 6px;
  color: #333;
}

.city {
  color: #999;
  font-size: 14px;
  margin-bottom: 8px;
}

.price-info {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
  
}

.price-item {
  margin-bottom: 4px;
}

/* 新增的年龄说明样式 */
.age-note {
  margin-top: 6px;
  font-size: 12px;
  color: #aaa;
  line-height: 1.4;
}
</style>