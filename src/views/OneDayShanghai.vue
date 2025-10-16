<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <section style="padding: 0px 200px; background-color: white;">
      <div class="card-grid">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in items" :key="item.id">
            <router-link :to="`/Detail/${item.id}`" style="text-decoration: none; color: inherit;">
              <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-top: 30px;">
                <img :src="item.image" class="card-image" />
                <div class="card-content">
                  <div class="title">{{ item.title }}</div>
                  <div class="price-info">
                    <div class="price-item">Adult: ${{ formatPrice(item.adultPrice) }}/Pax</div>
                    <div class="price-item">Child: ${{ formatPrice(item.childPrice) }}/Pax</div>
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
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tour1 from '@/assets/Tour1.jpg';
import Tour2 from '@/assets/Tour2.jpg';
import Tour3 from '@/assets/Tour3.jpg';

export default {
  name: "About",
  components: {
    Header,
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
          title: "Zhujiajiao Watertown: Historic Water Town & Canal Cruise",
          adultPrice: 169,
          childPrice:129,
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

.card-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-image:hover {
  transform: scale(1.1);
}

.card-content {
  padding: 14px;
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