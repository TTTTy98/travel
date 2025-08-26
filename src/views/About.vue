<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />

    <!-- 主内容区 -->
    <section class="about-section">
      <h2 class="subtitle">✨ About Us</h2>

      <p>
        We are a team of friends with
        <span class="bold-text">international backgrounds</span>
        and a shared
        <span class="bold-text">passion for travel.</span>
      </p>

      <p>
        Shaped by our upbringing in China, enriched by studies at top universities in Europe and the U.S., 
        and broadened by work and life experiences around the world, we have a unique insight into what 
        foreign travelers really need when discovering China.
      </p>

      <p>
        Wherever we are, one thing never changes: our love for exploring the world. 
        We believe travel is not just about reaching a destination, but about connecting with culture and people.
      </p>

      <p>
        That’s why we design every trip with meticulous detail — to uncover the most 
        <span class="bold-text">authentic experiences</span>, the most unique corners, 
        and the warmest human stories.
      </p>

      <p>
        At the same time, we understand the challenges of cross-border travel: language barriers, 
        payment difficulties, lack of immersion... These were once our own struggles abroad, 
        and today, they are the same pain points many foreign travelers face in China.
      </p>

      <h2 class="subtitle">✨ Data & Insights: Why We Do This</h2>
      <p>
        To better understand the needs of global travelers, our team invested all resources into 
        <span class="bold-text">365 days of big-data research and fieldwork</span>. The results were eye-opening:
      </p>
      <ul class="list">
        <li>
          <span class="bold-text">62% of travelers</span> said cultural immersion and community interaction 
          are their top priorities when choosing a destination.
        </li>
        <li>
          In cultural hubs like Chengdu and Shanghai, 
          <span class="bold-text">over 70% of tourists</span> felt that “just visiting attractions” was not enough — 
          they longed for something more unique and meaningful.
        </li>
      </ul>
      <p>
        This made us even more determined: tourism in China needs a 
        <span class="bold-text">new approach</span> to travel.
      </p>

      <h2 class="subtitle">✨ Our Answer</h2>
      <p>
        That’s why we founded this company, focusing on 
        <span class="bold-text">immersive cultural experiences</span> in Chengdu and Shanghai. 
        We believe travel is not only about sightseeing, but about living and breathing local culture.
      </p>
      <p>Today, we proudly offer:</p>
      <ul class="list">
        <li>30+ licensed English-speaking guides</li>
        <li>20+ multilingual experts (German, Italian, French, Spanish, etc.)</li>
        <li>A professional private vehicle fleet</li>
        <li>Innovative trip design capabilities</li>
      </ul>
      <p>
        With these strengths, we deliver tailor-made cultural immersion experiences to travelers from 
        <span class="bold-text">40+ countries worldwide</span>.
      </p>

      <h2 class="subtitle">✨ Our Signature Experiences</h2>
      <p>To break away from the traditional “sightseeing mode,” we designed a series of one-of-a-kind immersive programs:</p>
      <ul class="list">
        <li><span class="bold-text">Day in a Tibetan Village</span> → From dawn to dusk, live like a local</li>
        <li><span class="bold-text">Taoist Practice Journey</span> → Explore the wisdom and mystery of ancient Taoism</li>
        <li><span class="bold-text">Panda Keeper Experience</span> → Go beyond watching pandas — work with China’s national treasure up close</li>
        <li><span class="bold-text">Kung Fu & Tai Chi</span> → Learn the thousand-year-old philosophy of balance and strength under the guidance of a master</li>
        <li><span class="bold-text">Shanghai Breakfast & Dessert Walk</span> → Savor local flavors and uncover hidden stories along Nanjing Road, People’s Square, and the Bund.</li>
      </ul>
      <p>
        These experiences go beyond typical sightseeing, allowing travelers to return home with authentic, 
        unique, and life-changing memories.
      </p>

      <h2 class="subtitle">✨ Our Achievements</h2>
      <p>Since our founding, our work has been recognized by travelers and the market:</p>
      <ul class="list">
        <li>365 days of in-depth research and product development</li>
        <li>Visitors from 40+ countries worldwide</li>
      </ul>
      <p>
        Thanks to our commitment to 
        <span class="bold-text">immersion + personalization</span>, 
        we have quickly become one of the most promising new brands in China’s inbound tourism market.
      </p>

      <h2 class="subtitle">✨ Our Vision</h2>
      <p>
        We hope that every traveler who comes to China takes away not just photos, 
        but a genuine cultural connection. Here, travel is more than crossing borders — 
        it is about building bridges between people and cultures.
      </p>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "About",
  components: {
    Header,
  },
};
</script>

<style scoped>
.homepage {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: white;
}

.about-section {
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.7;
  color: #333;
}

/* 标题样式 */
.title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  color: #000;
}

.subtitle {
  font-size: 24px;
  font-weight: bold;
  margin: 32px 0 16px;
  color: #000;
  text-align: left;
}

/* 段落样式 */
.about-section p {
  font-size: 16px;
  margin: 16px 0;
  text-align: justify;
}

/* 加粗文本 */
.bold-text {
  font-weight: bold;
  color: #d4a574; /* 可选：用品牌色突出关键信息 */
}

/* 列表样式 */
.list {
  margin: 16px 0;
  padding-left: 20px;
  font-size: 16px;
}

.list li {
  margin: 10px 0;
  line-height: 1.6;
}

/* ========================================
   响应式设计：移动端适配
   ======================================== */

@media (max-width: 768px) {
  .title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 22px;
  }

  .about-section p,
  .list li {
    font-size: 15px;
    line-height: 1.6;
  }

  .list {
    padding-left: 16px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 22px;
  }

  .subtitle {
    font-size: 20px;
  }

  .about-section {
    padding: 30px 15px;
  }

  .about-section p,
  .list li {
    font-size: 14px;
    line-height: 1.5;
  }

  .bold-text {
    font-size: 14.5px;
  }
}

/* 超小屏或横屏手机 */
@media (max-height: 500px) and (max-width: 900px) {
  .about-section {
    padding-top: 20px;
  }

  .title,
  .subtitle {
    margin-top: 20px;
  }
}
</style>