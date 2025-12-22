<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    
    <section class="tours-section">
      <div class="card-grid">
        <el-row :gutter="20">
          <!-- 响应式列：手机1列，平板2列，桌面3~4列 -->
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8" 
            v-for="item in items"
            :key="item.id"
          >
            <router-link :to="`/DetailSh/${item.id}`" class="card-link">
              <el-card :body-style="{ padding: '0px' }" shadow="hover" class="tour-card">
                <img :src="item.image" class="card-image" :alt="item.title" />
                <div class="card-content">
                  <div class="title">{{ item.title }}</div>
                  <div class="price-info">
                    <div class="price-item">Adult: ${{ formatPrice(item.adultPrice) }}/Pax</div>
                    <div class="price-item">Child: ${{ formatPrice(item.childPrice) }}/Pax</div>
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
import Tour1 from '@/assets/Tour1.jpg';
import Tour2 from '@/assets/Tour2.jpg';
import Tour3 from '@/assets/Tour3.jpg';
import Footer from "@/components/Footer.vue";

export default {
  name: "ShanghaiTours", // 建议重命名，但非必需
  components: {
    Header,
    Footer
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Taste of Tradition: Shanghai Breakfast Tour",
          adultPrice: 69,
          childPrice: 50,
          image: Tour1
        },
        {
          id: 2,
          title: "Fengjing Watertown: A Journey into Shanghai’s Hidden Waterways",
          adultPrice: 159,
          childPrice: 119,
          image: Tour2
        },
        {
          id: 3,
          title: "Zhujiajiao: Shanghai’s Most Iconic Water Town & Private Canal Cruise",
          adultPrice: 169,
          childPrice: 129,
          image: Tour3
        }
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
  padding: 30px 15px; /* 移动端安全内边距 */
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
  color: #666;
}

.price-item {
  margin-bottom: 4px;
}

.age-note {
  font-size: 11px;
  color: #999;
  line-height: 1.4;
}

/* 平板及以上 */
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