<template>
  <!-- 外层容器保持背景色和全宽 -->
  <div class="other-attractions-section">
    <!-- 内部内容容器，限制最大宽度并居中 -->
    <div class="container">
      <!-- 标题栏 -->
      <div class="section-header">
        <h3>Other Top Attractions around Chengdu</h3>
        <!-- "See More" 链接已移除 -->
      </div>

      <!-- 景点卡片容器 -->
      <div class="attractions-grid">
        <!-- 使用 v-for 循环渲染随机挑选的4个景点卡片 -->
        <div
          v-for="attraction in randomAttractions"
          :key="attraction.id"
          class="attraction-card"
        >
          <router-link :to="`/DetailCd/${attraction.id}`">
            <div class="image-wrapper">
              <!-- 使用动态图片路径 -->
              <img :src="attraction.image" :alt="attraction.name" />
              <div class="overlay">
                <!-- 使用动态分类 -->
                <span class="category">{{ attraction.category }}</span>
              </div>
            </div>
            <div class="card-content">
              <!-- 使用动态景点名称 -->
              <h3>{{ attraction.name }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

export default {
  name: "OtherAttractions",
  // 定义 props 接收父组件传来的 ID
  props: {
    excludeId: {
      type: [Number, String], // ID 可能是数字或字符串
      required: true
    }
  },
  data() {
    return {
      // 景点数据，定义为变量
      attractionsData: [
        {
          id: 1,
          name: "Chengdu: Home of Kung Fu Panda — Pandas, Martial Arts & Tai Chi Wonders",
          category: "Day Tours",
          image: TourCd1 // 替换为您的图片路径
        },
        {
          id: 2,
          name: "Panda Volunteer Experience & Kuanzhai Alley Exploration",
          category: "Day Tours",
          image: TourCd2
        },
        {
          id: 3,
          name: "Chengdu to Tibetan Village: Experience a Day in Tibetan Life",
          category: "Day Tours",
          image: TourCd3
        },
        {
          id: 4,
          name: "Xiling Snow Mountain: Day Tour of Adventure and Beauty",
          category: "Day Tours",
          image: TourCd4
        },
        {
          id: 5,
          name: "Leshan Giant Buddha & Pandas: A Day of Wonder",
          category: "Day Tours",
          image: TourCd5 // 替换为您的图片路径
        },
        {
          id: 6,
          name: "Tea Picking & Panda Encounters in the Unspoiled",
          category: "Day Tours",
          image: TourCd6
        },
        {
          id: 7,
          name: "Discover Wolong, Blue Tears & Zhongshu: Chengdu’s Secret Gems",
          category: "Day Tours",
          image: TourCd7
        },
        {
          id: 8,
          name: "Mount Qingcheng & Panda Valley Day Tour",
          category: "Day Tours",
          image: TourCd8
        },
        {
          id: 9,
          name: "Emei Mountain & Ancient Town of Huanglongxi",
          category: "Day Tours",
          image: TourCd9 // 替换为您的图片路径
        },
        {
          id: 10,
          name: "Discover the Snowy Magic of Bipenggou in One Day",
          category: "Day Tours",
          image: TourCd10
        },
        {
          id: 11,
          name: "Chengdu: A Journey Through Culture & Tradition",
          category: "Day Tours",
          image: TourCd11
        },
        {
          id: 12,
          name: "Zen Escape: A Journey into Mindful Serenity",
          category: "Day Tours",
          image: TourCd12
        },
        // 注意：原代码中此处有一个多余的逗号，已移除
        {
          id: 13,
          name: "Discover Siguniang Mountain: One-Day Adventure",
          category: "Day Tours",
          image: TourCd13
        }
        // 您可以在这里继续添加更多景点
      ]
    };
  },
  computed: {
    // 计算属性：根据 excludeId 动态生成随机的 4 个景点
    randomAttractions() {
      // 1. 过滤掉 excludeId 对应的景点
      const filteredData = this.attractionsData.filter(attraction => attraction.id !== this.excludeId);

      // 2. 随机打乱数组
      const shuffled = [...filteredData].sort(() => 0.5 - Math.random());

      // 3. 取前 4 个元素
      return shuffled.slice(0, 4);
    }
  }
};
</script>

<style scoped>
/* 外层容器：设置背景色，全宽 */
.other-attractions-section {
  background-color: white;
  width: 100%;
}

/* 内部容器：限制最大宽度并居中 */
.container {
  max-width: 1000px; /* 修改为您需要的 1000px 或 1100px */
  width: 100%;
  margin: 0 auto; /* 水平居中 */
  padding: 40px 20px; /* 保留原始的内边距 */
  font-family: 'Arial', sans-serif;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.section-header h3 {
  font-weight: bold;
  color: #333;
  margin: 0;
}

.attractions-grid {
  display: grid;
  /* 关键修改：每行固定4列，并设置间距 */
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.attraction-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.attraction-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 123, 255, 0.8), transparent);
  padding: 10px 15px;
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.card-content {
  padding: 15px;
  text-align: center;
}

.card-content h3 {
  font-size: 14px;
  color: #333;
  margin: 0;
  line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 992px) {
  /* 当屏幕小于 992px 时，变为 3 列 */
  .attractions-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  /* 当屏幕小于 768px 时，变为 2 列 */
  .attractions-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .image-wrapper {
    height: 180px;
  }

  .card-content h3 {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  /* 当屏幕小于 480px 时，变为单列 */
  .attractions-grid {
    grid-template-columns: 1fr;
  }

  .image-wrapper {
    height: 200px;
  }

  .card-content {
    padding: 12px;
  }

  .card-content h3 {
    font-size: 14px;
  }
}
</style>