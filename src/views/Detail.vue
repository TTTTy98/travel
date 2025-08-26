<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />

    <section style=" display:flex;align-items: center;justify-content: center;background-color: white;">
      <el-row :gutter="20" class="magnifier-wrapper">
        <!-- 左侧缩略图 -->
        <el-col :span="4">
          <div class="thumb-list">
            <div v-for="(img, index) in images" :key="index" class="thumb" :class="{ active: img === currentImage }"
              @click="setActiveImage(img)">
              <img :src="img" />
            </div>
          </div>
        </el-col>

        <!-- @mousemove="handleMouseMove" @mouseleave="hideZoom" -->
        <!-- 中间主图 -->
        <el-col :span="10">
          <div class="image-container">
            <transition name="fade" mode="out-in">
              <img :src="currentImage" class="main-img" ref="mainImage" :key="currentImage" />
            </transition>
            <div class="mask" v-if="showZoom" :style="{ top: maskTop + 'px', left: maskLeft + 'px' }"></div>
          </div>
        </el-col>



        <!-- 右侧放大镜区域 -->
        <el-col :span="10" class="zoom-col">
          <div v-if="showZoom" class="zoom-preview" :style="zoomStyle"></div>
          <div style="margin-left: 20px;">
            <h1>Chengdu</h1>
            <h1>Giant Panda and Leshan Buddha</h1>
            <div style="font-size: 40px;font-weight: bold;margin-top: 50px;">$288.00</div>
          </div>

        </el-col>
      </el-row>

    </section>
    <div style=" display:flex;background-color: white;padding:5% 20%">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Overview" name="first">
          In the hometown of Kung Fu Panda, Chengdu, you can not only witness the adorable pandas up close but also
          immerse yourself in the charm of Kung Fu. This city is the birthplace of legendary martial arts stars like
          Jackie Chan and Bruce Lee, and the place where traditional martial arts and Tai Chi have been practiced for
          over 2,300 years in the UNESCO World Heritage site, Qingcheng Mountain. Here, you'll have the unique
          opportunity to learn authentic Tai Chi, one of China’s most revered martial arts, along with other traditional
          martial arts, all under the guidance of seasoned masters. Meanwhile, visit Panda Valley, one of the world’s
          most famous panda conservation areas, where you can observe these national treasures in their natural habitat.
          Don’t miss the chance to explore Chengdu’s three iconic cultural landmarks—Zhongshu Bookstore (ranked among
          the "Top 10 Most Beautiful Bookstores in the World"), Yantianwo (home to the world’s largest panda sculpture),
          and Nanqiao (an ancient bridge that holds centuries of Chengdu’s culture). This journey seamlessly combines
          the essence of martial arts, culture, and nature for an unforgettable experience.
        </el-tab-pane>
        <el-tab-pane label="Highlights" name="second">
          <p><span style="font-weight: bold;">Panda Valley –</span> Visit one of the world’s top panda conservation
            areas and observe these adorable creatures
            up
            close in their natural habitat.</p>
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Traditional Martial Arts & Tai Chi –
            </span>Immerse yourself in the birthplace of Kung Fu legends like Jackie Chan
            and Bruce Lee by learning traditional martial arts and Tai Chi in the ancient, 2,300-year-old Qingcheng
            Mountain.</p>
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Yantianwo –</span> Marvel at the world’s largest
            panda sculpture, a monumental work that celebrates Chengdu's
            connection to these beloved animals.
          </p>
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Zhongshu Bookstore –</span> Explore one of the
            "Top 10 Most Beautiful Bookstores in the World" and immerse
            yourself
            in a paradise for book lovers.
          </p>
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Nanqiao Bridge –</span> Step back in time at this
            ancient bridge, which has stood as a cultural icon of Chengdu
            for
            centuries, blending history with stunning views.
          </p>
        </el-tab-pane>
        <el-tab-pane label="Cost" name="third">
          <p><span style="font-weight: bold;">Includes/Excludes</span> </p>
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Cost Includes</span> </p>
          <p>
          <ul>
            <li>Tai Chi &Martial Arts learning course</li>
            <li>Tour guide</li>
            <li>Transportation</li>
            <li>Tax</li>
          </ul>
          </p>
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Cost Exclude</span> </p>
          <p>
          <ul>
            <li>Panda valley ticket</li>
            <li>Personal Expenses such as shopping</li>
            <li>Tips</li>

          </ul>
          </p>
        </el-tab-pane>
        <el-tab-pane label="Itinerary" name="fourth">
          <p style="margin-top: 2%;">9:30AM-11:30AM Visit panda Valley/</p>
          <p style="margin-top: 2%;">  12:00PM-1:00PM Lunch/</p>
          <p style="margin-top: 2%;">  1:30PM-3:00PM Learn Kung Fu or Tai Chi/</p>
          <p style="margin-top: 2%;"> 3:30PM-4:00PM visit zhongshu bookstore/</p>
          <p style="margin-top: 2%;">4:30PM-5:30PM visit yangtianwo square and nanqiao bridge/</p>
        </el-tab-pane>
        <el-tab-pane label="Important Info" name="fifth">
          <p>
          Cancellation Policy: clients must cancel their reservations at least 24 hours before the tour starts to receive a refund; otherwise, no fees will be refunded.
        </p></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import img1 from '@/assets/gallery1.jpg'
import img2 from '@/assets/gallery2.jpg'
import img3 from '@/assets/gallery3.jpg'
import img4 from '@/assets/gallery4.jpg'

export default {
  name: "About",
  components: {
    Header,

  },
  data() {
    return {
      images: [img1, img2, img3, img4],
      currentImage: img1,

      showZoom: false,
      maskLeft: 0,
      maskTop: 0,
      maskSize: 100,
      zoomScale: 2,
      imageWidth: 0,
      imageHeight: 0,
      activeName: 'first'

    };
  },
  computed: {
    zoomStyle() {
      return {
        width: this.maskSize * this.zoomScale + 'px',
        height: this.maskSize * this.zoomScale + 'px',
        backgroundImage: `url(${this.currentImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${this.imageWidth * this.zoomScale}px ${this.imageHeight * this.zoomScale}px`,
        backgroundPosition: `-${this.maskLeft * this.zoomScale}px -${this.maskTop * this.zoomScale}px`
      };
    }
  },
  mounted() {
    this.setImageSize();
    window.addEventListener('resize', this.setImageSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setImageSize);
  },
  methods: {
    setActiveImage(img) {
      this.currentImage = img;
      this.showZoom = false;
      this.$nextTick(() => {
        this.setImageSize();
      });
    },
    setImageSize() {
      const img = this.$refs.mainImage;
      if (img) {
        this.imageWidth = img.clientWidth;
        this.imageHeight = img.clientHeight;
      }
    },
    handleMouseMove(e) {
      const rect = this.$refs.mainImage.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      let maskX = x - this.maskSize / 2;
      let maskY = y - this.maskSize / 2;

      maskX = Math.max(0, Math.min(maskX, rect.width - this.maskSize));
      maskY = Math.max(0, Math.min(maskY, rect.height - this.maskSize));

      this.maskLeft = maskX;
      this.maskTop = maskY;
      this.showZoom = true;
    },
    hideZoom() {
      this.showZoom = false;
    }
  }

};
</script>

<style scoped>
.magnifier-wrapper {
  margin-top: 20px;

}

/* 缩略图样式 */
.thumb-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.thumb {
  border: 2px solid transparent;
  cursor: pointer;
}

.thumb.active {
  border-color: #409EFF;
}

.thumb img {
  width: 100%;
  height: 60px;
  object-fit: cover;
  display: block;
}

/* 中间图 */
.image-container {
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid #e4e7ed;
}

.main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mask {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rgba(64, 158, 255, 0.3);
  border: 2px solid #409EFF;
  pointer-events: none;
}

.zoom-col {
  position: relative;
  height: 400px;
}

/* 放大镜区域不撑宽父级 */
.zoom-preview {
  position: absolute;
  top: 0;
  left: 0;
  /* 或 right: 0 根据你要的位置 */
  width: 200px;
  height: 200px;
  border: 1px solid #e4e7ed;
  background-repeat: no-repeat;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>