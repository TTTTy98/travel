<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />

    <section style="
        display: flex;
        align-items: flex-start;
        justify-content: center;
        background-color: white;
        padding: 30px 0;
      ">
      <el-row :gutter="20" class="magnifier-wrapper" type="flex" align="top">
        <!-- 左侧缩略图 -->
        <el-col :span="4">
          <div class="thumb-list">
            <div v-for="(img, index) in images" :key="index" class="thumb" :class="{ active: img === currentImage }"
              @click="setActiveImage(img)">
              <img :src="img" alt="Thumbnail" />
            </div>
          </div>
        </el-col>

        <!-- 中间主图 -->
        <el-col :span="10">
          <div class="image-container">
            <transition name="fade" mode="out-in">
              <img :src="currentImage" class="main-img" ref="mainImage" :key="currentImage" alt="Main product image" />
            </transition>
            <!-- 放大镜遮罩（当前未启用交互，仅保留结构） -->
            <div class="mask" v-if="showZoom" :style="{ top: maskTop + 'px', left: maskLeft + 'px' }"></div>
          </div>
        </el-col>

        <!-- 右侧产品信息 -->
        <el-col :span="10">
          <div class="product-info-simple">
            <h1 class="main-title">Taste of Tradition: Shanghai Breakfast Tour</h1>


            <div class="price-section">
              <div class="price-item adult-price">
                Adult: <span class="price-amount">$69</span>/Pax
              </div>
              <div class="price-item child-price">
                Child: <span class="price-amount">$50</span>/Pax
              </div>
            </div>

            <div class="age-note">
              Adult ages 13 and above, Child ages 4–12
            </div>
          </div>
        </el-col>
      </el-row>
    </section>

    <!-- 详情 Tabs -->
    <div style="
        display: flex;
        background-color: white;
        padding: 5% 20%;
        justify-content: center;
      ">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 100%">
        <el-tab-pane label="Overview" name="first">
          Start your day the Shanghai way—through its breakfast tables and historic streets. This walking food tour
          combines authentic morning flavors with stories hidden behind the city’s landmarks. From century-old dessert
          shops and bustling food stalls to iconic boulevards like Nanjing Road, People’s Square, Suzhou Creek, and the
          Bund, you’ll explore how Shanghai grew from a riverside town into a global metropolis—all while tasting the
          dishes that fuel the city every morning. Perfect for first-time visitors and long-term residents alike, this
          journey blends culinary discovery and cultural immersion in just a few hours.
          <p><span style="font-weight: bold;">What You’ll Experience</span></p>
          <ul>
            <li> <span class="bold-text">Soup Dumplings Restaurant (est. 1986)</span>
              <p>Taste Shanghai’s iconic xiaolongbao: thin-skinned dumplings
                bursting with crab roe broth. Alongside them, enjoy a tender pork chop with surprising Western influence
                and a comforting bowl of wontons in soup—each dish reflecting the city’s culinary evolution.</p>
            </li>
            <li> <span class="bold-text">Rice Sweets Restaurant (est. 1875)</span>
              <p>Begin with chewy glutinous rice cakes that have been a local favorite on Nanjing Road for over a
                century. The fillings—red bean or sesame—strike a balance of sweetness and nuttiness. Pair them with a
                warm cup of soy milk, a breakfast combination deeply rooted in Shanghai traditions.</p>
            </li>
            <li> <span class="bold-text">Nanjing Road</span>
              <p>Once the city’s commercial heart, Nanjing Road remains one of Shanghai’s busiest shopping avenues.</p>
            </li>
            <li><span class="bold-text">People’s Square</span>
              <p>Take a leisurely walk through People’s Square, the cultural heart of Shanghai, and let the flavors of
                your meal settle as you wander. Nearby, discover a historic cinema and grand hotel that once towered as
                the city’s highest landmark for half a century. Just steps away, People’s Park bursts with
                life—especially on weekends, when the famous marriage market unfolds, where parents gather to find
                matches for their children.</p>
            </li>
            <li><span class="bold-text">Shengjian Bun Eatery (since 1994)</span>
              <p>No trip to Shanghai is complete without tasting Shengjian, the city’s signature pan-fried bun. Its
                golden, crunchy crust gives way to juicy fillings, often enjoyed alongside a warm bowl of glass noodle
                soup. Hear stories of the rivalries between two local bun-making traditions, much like the debate
                between Coca-Cola and Pepsi.</p>
            </li>
            <li><span class="bold-text">Traditional Chinese Dessert House (est. 1851)</span>
              <p>Indulge your sweet tooth with a traditional stewed milk pudding, a dessert with roots in southern China
                since the 19th century, now cherished nationwide for its silky richness. For something fruity, try the
                mango-inspired creations, a refreshing twist beloved by dessert lovers.</p>
            </li>
            <li><span class="bold-text">Scallion Pancake Stall</span>
              <p>Another street-food favorite is the scallion pancake, made by layering dough with fragrant green
                onions, then pan-fried until crispy and aromatic. The result is a snack that’s flaky, savory, and
                irresistibly satisfying.</p>
            </li>
            <li><span class="bold-text">Suzhou Creek</span>
              <p>Enjoy one of the most underrated skyline views of Pudong. Along the way, discover how the Huangpu River
                and Suzhou Creek helped Shanghai transform from a quiet water town into an international metropolis.</p>
            </li>
            <li><span class="bold-text">The Bund</span>
              <p>Finally, immerse yourself in the grandeur of the Bund, Shanghai’s iconic waterfront. Once called the
                “Number One Street in the Far East,” it was the stage where international talent and capital converged,
                creating a dazzling display of prosperity. Behind the grand facades lie untold stories of the city’s
                golden era and its defining moments in history.</p>
            </li>
            <li><span class="bold-text">Scallion Pancake Stall</span>
              <p></p>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="Highlights" name="second">
          <ul>
            <li><span class="bold-text">Authentic Breakfast Tastes–</span> Savor egg pancakes, soup dumplings,
            crispy buns, scallion pancakes, and traditional Chinese desserts, many from time-honored restaurants dating
            back over a century.</li>
            <li><span class="bold-text">Hidden Food Stories –</span>
            Learn the origins and rivalries behind Shanghai’s breakfast classics, from the debate over pan-fried buns to
            the city’s unique Western influences on local dishes.</li>
            <li><span class="bold-text"> Historic Walk –</span>Pass through Nanjing Road,
            once China’s first commercial hub; stroll People’s Square and uncover the history of its cinema, hotels, and
            even its weekend marriage market.</li>
            <li><span class="bold-text">Cultural Landmarks –</span> Take in the skyline
            from Suzhou Creek and walk along the Bund, discovering untold stories of how Shanghai became the “No.1 city
            of the Far East.”</li>
            <li><span class="bold-text"> Perfect Morning Experience –</span> A compact
            yet rich journey that satisfies both the stomach and the mind, combining food, history, and culture.</li>
          </ul>
 
    
        </el-tab-pane>
        <el-tab-pane label="Cost" name="third">
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
          <ul>
            <li>Professional English-speaking guide</li>
            <li>Hearty traditional Chinese breakfast at 5+ authentic local eateries (enough to keep you satisfied for the rest of the morning)</li>
            <li>Private taxi transfer from People’s Square to Suzhou Creek</li>
          </ul>
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
          <ul>
            <li>Hotel pickup and drop-off</li>
            <li>Personal expenses such as additional food, drinks, or shopping</li>
            <li>Gratuities for the guide</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="Itinerary" name="fourth">
          <p style="margin-top: 2%;">9:30AM - 11:30AM: Visit Panda Valley</p>
          <p style="margin-top: 2%;">12:00PM - 1:00PM: Lunch</p>
          <p style="margin-top: 2%;">1:30PM - 3:00PM: Learn Kung Fu or Tai Chi</p>
          <p style="margin-top: 2%;">3:30PM - 4:00PM: Visit Zhongshu Bookstore</p>
          <p style="margin-top: 2%;">4:30PM - 5:30PM: Visit Yangtianwo Square and Nanqiao Bridge</p>
        </el-tab-pane>
        <el-tab-pane label="Important Info" name="fifth">
          <p>
            Cancellation Policy: Clients must cancel their reservations at least 24 hours before the tour starts to
            receive a refund; otherwise, no fees will be refunded.
          </p>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import img1 from '@/assets/sh-1-1.jpg';
import img2 from '@/assets/sh-1-2.jpg';
import img3 from '@/assets/sh-1-3.jpg';
import img4 from '@/assets/sh-1-4.jpg';
import img5 from '@/assets/sh-1-5.jpg';
import img6 from '@/assets/sh-1-6.jpg';
import img7 from '@/assets/sh-1-7.jpg';
import img8 from '@/assets/sh-1-8.jpg';

export default {
  name: "Detail",
  components: {
    Header,
  },
  data() {
    return {
      images: [img1, img2, img3, img4, img5, img6, img7, img8],
      currentImage: img1,
      showZoom: false,
      maskLeft: 0,
      maskTop: 0,
      maskSize: 100,
      zoomScale: 2,
      imageWidth: 0,
      imageHeight: 0,
      activeName: 'first',
      intervalId: null,     // 定时器 ID
      autoPlay: true,       // 是否自动播放
      slideInterval: 5000   // 切换间隔：3秒
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
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setImageSize);
    this.stopAutoPlay();
  },
  methods: {
    setActiveImage(img) {
      this.currentImage = img;
      this.showZoom = false;
      // 可选：用户手动切换后，重置自动播放（避免打断体验）
      this.resetAutoPlay();
    },
    nextImage() {
      const currentIndex = this.images.indexOf(this.currentImage);
      const nextIndex = (currentIndex + 1) % this.images.length;
      this.currentImage = this.images[nextIndex];
      this.showZoom = false;
    },
    startAutoPlay() {
      this.intervalId = setInterval(() => {
        this.nextImage();
      }, this.slideInterval);
    },
    stopAutoPlay() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    resetAutoPlay() {
      // 停止并重新开始，确保用户操作后不会立即切换
      this.stopAutoPlay();
      if (this.autoPlay) {
        setTimeout(() => {
          this.startAutoPlay();
        }, this.slideInterval);
      }
    },
    setImageSize() {
      const img = this.$refs.mainImage;
      if (img) {
        this.imageWidth = img.clientWidth;
        this.imageHeight = img.clientHeight;
      }
    },
    // 放大镜方法（当前未启用，保留结构）
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
    },
    handleClick(tab) {
      // Tab 切换回调
    }
  }
};
</script>

<style scoped>
.homepage {
  font-family: 'Arial', sans-serif;
}

.magnifier-wrapper {
  max-width: 1200px;
  width: 100%;
}

/* 缩略图 */
.thumb-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.thumb {
  width: 100px;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 4px;
}

.thumb.active {
  border-color: #409eff;
}

.thumb img {
  width: 100px;
  height: 60px;
  object-fit: cover;
  display: block;
  border-radius: 2px;
}

/* 主图容器 */
.image-container {
  position: relative;
  width: 500px;
  height: 400px;
  border: 1px solid #e4e7ed;
  overflow: hidden;
  border-radius: 4px;
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
  border: 2px solid #409eff;
  pointer-events: none;
}

/* 简洁产品信息区 */
.product-info-simple {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-left: 50px;
  gap: 12px;
}

.main-title {
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  color: #333;
  line-height: 1.3;
}

.sub-title {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #555;
  line-height: 1.4;
}

.price-section {
  margin: 8px 0;
}

.price-item {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

.price-amount {
  color: #f56c6c;
  font-size: 22px;
  font-weight: 700;
}

.age-note {
  font-size: 13px;
  color: #999;
  line-height: 1.5;
  margin-top: 4px;
}

/* Tabs */
.el-tabs {
  max-width: 900px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 加粗文本 */
.bold-text {
  font-weight: bold;
  color: #d4a574;
  /* 可选：用品牌色突出关键信息 */
}
</style>