<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <section style="  padding: 0px 200px;background-color: white;">
      <div class="card-grid" >
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in items" :key="item.id">
        <router-link to="/Detail">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" style="margin-top: 30px;">
          <img :src="item.image" class="card-image" />
          <div class="card-content">
            <div class="title">{{ item.title }}</div>
            <div class="city">{{ item.city }}</div>
            <div class="price-rating">
              <div class="price">${{ item.price.toFixed(2) }}</div>
              <el-rate :value="item.rating" disabled show-score />
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
import Tour1 from '@/assets/Tour1.jpg'
import Tour2 from '@/assets/Tour2.jpg'
import Tour3 from '@/assets/Tour3.jpg'
import Tour4 from '@/assets/Tour4.jpg'
import Tour5 from '@/assets/Tour5.jpg'
import Tour6 from '@/assets/Tour6.jpg'

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
          title: "A Taste of Authentic Hutong Food",
          city: "Beijing",
          price: 75.0,
          rating: 5,
          image: Tour1
        },
        {
          id: 2,
          title: "Glimpse Into Imperial Splendor",
          city: "Beijing",
          price: 191.36,
          rating: 5,
          image:Tour2
        },
        {
          id: 3,
          title: "Cantonese Cooking and Tasting",
          city: "Guangzhou",
          price: 265.65,
          rating: 5,
          image: Tour3
        },
        {
          id: 4,
          title: "Terracotta Army Adventure",
          city: "Xi'an",
          price: 59.0,
          rating: 5,
          image: Tour4
        },
        {
          id: 5,
          title: "Terracotta Army Adventure",
          city: "Xi'an",
          price: 59.0,
          rating: 5,
          image: Tour5
        },
        {
          id: 6,
          title: "Terracotta Army Adventure",
          city: "Xi'an",
          price: 59.0,
          rating: 5,
          image: Tour6
        },
        // 更多项...
      ]
    };
  },
  mounted() {

  },
  methods: {

  },
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
  transform: scale(1.1); /* Scale the image to 110% of its original size */
}
.card-content {
  padding: 14px;
}
.title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 6px;
}
.city {
  color: #999;
  font-size: 14px;
  margin-bottom: 8px;
}
.price-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: 16px;
  font-weight: 600;
  color: #f56c6c;
}
</style>
