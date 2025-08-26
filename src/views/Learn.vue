<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />

    <section class="content-area">
      <!-- 主标题 -->
      <h1 class="main-title">
        China’s Visa-Free Transit Policy
      </h1>

      <!-- 引言 -->
      <p class="intro">
        Exciting news for travelers! China has recently released its latest visa-free transit policy, making it easier than ever to explore this vibrant country. Want to know if you’re eligible for visa-free travel? Keep reading to see if your destination is on the list!
      </p>

      <!-- 什么是过境免签 -->
      <h2 class="section-title">
        What is Visa-Free Transit Policy?
      </h2>
      <p>
        If you are in transit to or from any third country, you may be eligible for the <span class="highlight">240-hour visa-free transit</span> in China. Eligible foreign travelers transiting through China can now enjoy a visa-free stay of up to 240 hours (10 days), allowing for more flexible itineraries and in-depth exploration of permitted regions. Notably, under this policy, visa-free travelers can <span class="highlight">cross provincial boundaries</span> within the <span class="highlight">24 eligible regions</span>, offering greater flexibility for regional travel.
      </p>

      <!-- 资格标准 -->
      <h2 class="section-title">
        Eligibility Criteria for China’s Visa-Free Transit
      </h2>

      <!-- 符合条件的国籍 -->
      <h3 class="subsection-title">
        Eligible Nationalities
      </h3>
      <p>
        To obtain this visa exemption, the foreign national must have a valid passport from one of the 54 countries:
      </p>
      <ul class="list">
        <li><span>25 countries in the Europe Schengen area:</span> Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, and Switzerland.</li>
        <li><span>15 other countries in Europe:</span> Russia, United Kingdom, Ireland, Cyprus, Bulgaria, Romania, Ukraine, Serbia, Croatia, Bosnia and Herzegovina, Montenegro, Macedonia, Albania, Monaco, and Belarus.</li>
        <li><span>Six countries in the Americas:</span> the United States, Canada, Brazil, Mexico, Argentina, and Chile.</li>
        <li><span>Two countries in Oceania:</span> Australia and New Zealand.</li>
        <li><span>Six countries in Asia:</span> South Korea, Japan, Singapore, Brunei, the United Arab Emirates, and Qatar.</li>
      </ul>

      <!-- 所需文件 -->
      <h3 class="subsection-title">
        Travel Documentation
      </h3>
      <p>
        Travelers applying for 240-hour visa-free transit must have:
      </p>
      <ul class="list">
        <li>A valid passport or another international travel document that is <span class="highlight">valid for more than three months</span> from the arrival date;</li>
        <li>An interline ticket (connecting ticket) with the confirmed departure date and seat number leaving for <span class="highlight">a third country or region</span> within 240 hours;</li>
        <li>The landing card for foreigners in transit that is filled out upon arrival in China.</li>
      </ul>

      <!-- 政策适用范围 -->
      <h2 class="section-title">
        Scope of China’s 240-Hour Visa-Free Transit Policy
      </h2>

      <!-- 表格容器，确保可横向滚动 -->
      <div class="table-container">
        <table class="responsive-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Province (Region, City)</th>
              <th>Applicable Port (60)</th>
              <th>Area of Stay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Beijing</td>
              <td>Beijing Capital International Airport<br>Beijing Daxing International Airport</td>
              <td>Beijing</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tianjin</td>
              <td>Tianjin Binhai International Airport<br>Tianjin Seaport (Passenger)</td>
              <td>Tianjin</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Hebei</td>
              <td>Shijiazhuang Zhengding International Airport<br>Qinhuangdao Seaport (Passenger)</td>
              <td>Hebei Province</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Liaoning</td>
              <td>Shenyang Taoxian International Airport<br>Dalian Zhoushuizi International Airport<br>Dalian Seaport (Passenger)</td>
              <td>Liaoning Province</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Shanghai</td>
              <td>Shanghai Hongqiao International Airport<br>Shanghai Pudong International Airport<br>Shanghai Seaport (Passenger)</td>
              <td>Shanghai</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Jiangsu</td>
              <td>Nanjing Lukou International Airport<br>Sunan Shuofang International Airport<br>Yangzhou Taizhou International Airport<br>Lianyungang Seaport (Passenger)</td>
              <td>Jiangsu Province</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Zhejiang</td>
              <td>Hangzhou Xiaoshan International Airport<br>Ningbo Lishe International Airport<br>Wenzhou Longwan International Airport<br>Yiwu International Airport<br>Wenzhou Seaport (Passenger)<br>Zhoushan Seaport (Passenger)</td>
              <td>Zhejiang Province</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Anhui</td>
              <td>Hefei Xinqiao International Airport<br>Huangshan Tunxi International Airport</td>
              <td>Anhui Province</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Fujian</td>
              <td>Fuzhou Changle International Airport<br>Xiamen Gaoqi International Airport<br>Quanzhou Jinjiang International Airport<br>Wuyishan International Airport<br>Xiamen Seaport (Passenger)</td>
              <td>Fujian Province</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Shandong</td>
              <td>Jinan Yaoqiang International Airport<br>Qingdao Jiaodong International Airport<br>Yantai Penglai International Airport<br>Weihai Dashuibo International Airport<br>Qingdao Seaport (Passenger)</td>
              <td>Shandong Province</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Henan</td>
              <td>Zhengzhou Xinzheng International Airport</td>
              <td>Henan Province</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Hubei</td>
              <td>Wuhan Tianhe International Airport</td>
              <td>Hubei Province</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Hunan</td>
              <td>Changsha Huanghua International Airport<br>Zhangjiajie Hehua International Airport</td>
              <td>Hunan Province</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Guangdong</td>
              <td>Guangzhou Baiyun International Airport<br>Shenzhen Bao’an International Airport<br>Jieyang Chaoshan International Airport<br>Nansha Seaport (Passenger)<br>Shekou Seaport (Passenger)</td>
              <td>Guangdong Province<br>(can exit through any of Guangdong’s international airport)</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Hainan</td>
              <td>Haikou Meilan International Airport<br>Sanya Phoenix International Airport</td>
              <td>Hainan Province</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Chongqing</td>
              <td>Chongqing Jiangbei International Airport</td>
              <td>Chongqing City</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Guizhou</td>
              <td>Guiyang Longdongbao International Airport</td>
              <td>Guizhou Province</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Shaanxi</td>
              <td>Xi’an Xianyang International Airport</td>
              <td>Shaanxi Province</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Shanxi</td>
              <td>Taiyuan Wusu International Airport</td>
              <td>Taiyuan, Datong</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Heilongjiang</td>
              <td>Harbin Taiping International Airport</td>
              <td>Harbin</td>
            </tr>
            <tr>
              <td>21</td>
              <td>Jiangxi</td>
              <td>Nanchang Changbei International Airport</td>
              <td>Nanchang, Jingdezhen</td>
            </tr>
            <tr>
              <td>22</td>
              <td>Guangxi</td>
              <td>Nanning Wuxu International Airport<br>Guilin Liangjiang International Airport<br>Beihai Fucheng Airport<br>Beihai Seaport (Passenger)</td>
              <td>12 cities: Nanning, Liuzhou, Guilin, Wuzhou, Beihai, Fangchenggang, Qinzhou, Guigang, Yulin, Hezhou, Hechi, and Laibin</td>
            </tr>
            <tr>
              <td>23</td>
              <td>Sichuan</td>
              <td>Chengdu Shuangliu International Airport<br>Chengdu Tianfu International Airport</td>
              <td>11 cities: Chengdu, Zigong, Luzhou, Suining, Leshan, Deyang, Neijiang, Yibin, Ya’an, Meishan, and Ziyang.</td>
            </tr>
            <tr>
              <td>24</td>
              <td>Yunnan</td>
              <td>Kunming Changshui International Airport<br>Lijiang Sanyi International Airport<br>Mohan Railway Port</td>
              <td>9 cities: Kunming, Chuxiong, Yuxi, Honghe, Wenshan, Pu’er, Xishuangbanna, Dali, and Lijiang.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Learn",
  components: {
    Header,
  },
};
</script>

<style scoped>
/* 基础重置与字体设置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.homepage {
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
}

/* 内容区域 - 移除固定左右padding，使用响应式间距 */
.content-area {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: white;
}

/* 主标题 */
.main-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

/* 引言段落 */
.intro {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
}

/* 二级标题 */
.section-title {
  font-weight: bold;
  font-size: 1.3rem;
  margin: 1.5rem 0 1rem;
  color: #2c3e50;
}

/* 三级标题 */
.subsection-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin: 1.2rem 0 0.8rem;
  color: #333;
}

/* 列表样式 */
.list {
  margin: 0.8rem 0 1.2rem 1.5rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

.list li {
  margin-bottom: 0.5rem;
}

.list li span {
  font-weight: bold;
  color: #333;
}

/* 高亮文本 */
.highlight {
  color: #b05521;
  font-weight: bold;
}

/* 表格容器 - 关键：允许横向滚动 */
.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* 使滚动更流畅 */
  margin: 1.5rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* 响应式表格 */
.responsive-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* 确保表格有一定宽度，避免在极窄屏上过于压缩 */
}

.responsive-table th,
.responsive-table td {
  border: 1px solid #ccc;
  padding: 0.75rem 0.5rem;
  text-align: left;
  font-size: 0.85rem; /* 移动端减小字体 */
}

.responsive-table th {
  background-color: #f4f4f4;
  font-weight: bold;
  text-align: center;
}

.responsive-table td {
  line-height: 1.4;
}

/* 在大屏幕上恢复原始风格 */
@media (min-width: 768px) {
  .main-title {
    font-size: 2rem;
  }

  .intro,
  .section-title,
  .subsection-title,
  .list {
    font-size: 1.1rem;
  }

  .responsive-table th,
  .responsive-table td {
    padding: 1rem;
    font-size: 1rem;
  }

  .table-container {
    border-radius: 0;
  }
}
</style>