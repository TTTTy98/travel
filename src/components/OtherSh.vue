<template>
  <!-- 外层容器保持背景色和全宽 -->
  <div class="other-attractions-section">
    <!-- 内部内容容器，限制最大宽度并居中 -->
    <div class="container">
      <!-- 标题栏 -->
      <div class="section-header">
        <h3>Other Top Attractions around Shanghai</h3>
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
          <router-link :to="`/DetailSh/${attraction.id}`">
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
import Tour1 from '@/assets/Tour1.jpg';
import Tour2 from '@/assets/Tour2.jpg';
import Tour3 from '@/assets/Tour3.jpg';

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
          name: "Taste of Tradition: Shanghai Breakfast Tour",
          category: "Day Tours",
          image: Tour1 // 替换为您的图片路径
        },
        {
          id: 2,
          name: "Fengjing Watertown: A Journey into Shanghai’s Hidden Waterways",
          category: "Day Tours",
          image: Tour2
        },
        {
          id: 3,
          name: "Zhujiajiao: Shanghai’s Most Iconic Water Town & Private Canal Cruise",
          category: "Day Tours",
          image: Tour3
        },
     
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