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
            <h1 class="main-title">{{ tourInfo.title }}</h1>

            <div class="price-section">
              <div class="price-item adult-price">
                <span class="price-amount">${{ formatPrice(tourInfo.adultPrice) }}</span>/Pax
              </div>
              <div class="price-item child-price">
                <!-- Child: <span class="price-amount">${{ formatPrice(tourInfo.childPrice) }}</span>/Pax -->
              </div>
            </div>

            <div class="age-note">
              {{ tourInfo.ageNote }}
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
    <!-- 详情 Tabs -->
    <div style="
        display: flex;
        background-color: white;
        padding: 0% 20%;
        justify-content: center;
      ">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 100%">
        <el-tab-pane label="Overview" name="first">
          <div v-if="tourInfo.id === 1">
            <div>Discover Chengdu: Land of Pandas & Martial Arts
              Step into Chengdu, the hometown of Kung Fu Panda, where adventure meets heritage. Get up close with giant
              pandas at Panda Valley, one of the world’s leading panda conservation centers, and experience the grace
              and power of Chinese martial arts in a city linked to legends like Jackie Chan and Bruce Lee.
            </div>
            <div>
              Explore Qingcheng Mountain, a UNESCO World Heritage Site and a 2,300-year-old hub of Tai Chi and
              traditional martial arts, and learn directly from master instructors in this historic setting.
            </div>
            <div>
              Don’t miss Chengdu’s iconic cultural landmarks:
              <ul>
                <li>Zhongshu Bookstore – one of the “Top 10 Most Beautiful Bookstores in the World”</li>
                <li>Yantianwo – home to the world’s largest panda sculpture</li>
                <li>Nanqiao Bridge – an ancient landmark reflecting centuries of local culture</li>

              </ul>
              This journey perfectly blends nature, culture, and martial arts, giving you the authentic essence of
              Chengdu in an unforgettable experience.
            </div>
          </div>

          <div v-if="tourInfo.id === 2">
            <div>
              Kick off your day with an exclusive panda volunteering experience at the Giant Panda Breeding Research
              Base. Get up close with these beloved creatures as you feed and care for the pandas, stepping behind the
              scenes to see how conservation efforts protect these rare animals. Celebrate your contribution with a
              special volunteer certificate—a keepsake of your unforgettable day.
            </div>
            <div>Next, dive into the vibrant culture of Kuan-Zhai Alleys, wandering through historic lanes lined with
              ancient architecture, local artisan shops, and the irresistible aromas of Sichuan delicacies. This
              immersive itinerary perfectly blends hands-on wildlife conservation with rich cultural exploration,
              promising a truly memorable Chengdu adventure.
            </div>

          </div>
          <div v-if="tourInfo.id === 3">
            <div>
              pend a full day immersed in the vibrant traditions of Ganbao Tibetan Village, where history, art, and
              community come alive. Start your morning with a guided stroll through the village, exploring its unique
              architecture and uncovering the stories that have shaped this remarkable place.</div>
            <div>
              At lunchtime, savor an authentic Tibetan meal, made with fresh, ecological ingredients that highlight the
              region’s distinctive flavors.</div>
            <div>
              In the afternoon, dive into local customs with a hands-on butter tea workshop, learning how this beloved
              drink is prepared and enjoyed every day. For those who want to explore even further, participate in
              creative workshops like Thangka painting, Tibetan embroidery, or traditional paper-cutting, all showcasing
              centuries of artistic heritage. Capture your experience by dressing in traditional Tibetan attire and
              taking memorable photos.
            </div>
            <div>
              As evening falls, gather for a hearty yak meat hotpot and join the locals in a lively Guozhuang dance,
              exchanging the traditional Hada greeting. End your day around a warm bonfire, soaking in the hospitality,
              spirit, and unity that make Tibetan culture truly unforgettable.
            </div>
          </div>
          <div v-if="tourInfo.id === 8">
            <div>Mount Qingcheng, often hailed as the birthplace of Taoism, stands as a living symbol of China's rich
              spiritual heritage. Rising to about 1,600 meters, the mountain offers a leisurely yet rewarding hike, with
              ancient Taoist temples scattered along forested trails. For travelers seeking peace, reflection, or a
              glimpse into Taoist wisdom, it's an inspiring journey through both culture and nature.</div>
            <div>Not far away lies Panda Valley, a conservation park that differs from the well-known Panda Base. Here,
              the environment is designed to mirror the wilderness, allowing pandas to roam in surroundings that
              encourage their natural behaviors. Visitors can enjoy a closer, more authentic encounter with these gentle
              creatures while learning about ongoing efforts in research and preservation.</div>
            <div>This one-day excursion blends spiritual exploration with ecological discovery, offering a deeper
              connection to Sichuan's cultural roots and its most beloved wildlife.</div>
          </div>
          <div v-if="tourInfo.id === 9">
            <div>Just a short trip from Chengdu, Mount Emei, a UNESCO World Heritage site, invites travelers into a
              breathtaking sanctuary of biodiversity and the spiritual heart of Chinese Buddhism. Wander through
              towering ancient forests and marvel at the vibrant flora and diverse wildlife that showcase nature's
              grandeur. Along scenic trails, centuries-old monasteries resonate with timeless spiritual chants, offering
              a glimpse into a world of reflection and peace. At the summit, golden Buddhist temples glow under the soft
              light of sunrise or sunset, creating views that inspire awe and leave lasting memories.</div>
            <div>Complementing the mountain's majesty, Huanglongxi Ancient Town enchants visitors with its winding river
              at the heart and traditional Sichuanese architecture. Stroll across elegant stone bridges arching
              gracefully over the water, soak in the tranquil, historic ambiance, and imagine life in a classic
              riverside settlement where history seems to linger in every corner.</div>
            <div>This day trip is a perfect blend of natural wonder, spiritual heritage, and timeless charm, offering an
              unforgettable experience for travelers seeking both adventure and serenity.</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Highlights" name="second">
          <div v-if="tourInfo.id === 1"></div>
          <ul>
            <li><span class="bold-text">Panda Valley–</span> Discover China’s most beloved national treasure in one of
              the world’s leading panda conservation sites.</li>
            <li><span class="bold-text">Martial Arts & Tai Chi–</span>
              Step into the legacy of Bruce Lee and Jackie Chan by learning authentic Tai Chi and traditional martial
              arts at the legendary Qingcheng Mountain, where these traditions have thrived for over two millennia.</li>
            <li><span class="bold-text"> Yantianwo–</span>Admire the world’s largest panda sculpture, symbolizing
              Chengdu’s deep bond with the panda.</li>
            <li><span class="bold-text">Zhongshu Bookstore–</span> Recognized among the “Top 10 Most Beautiful
              Bookstores in the World,” this is a cultural paradise for book lovers.</li>
            <li><span class="bold-text"> Nanqiao Bridge–</span> Walk across an ancient bridge that carries centuries of
              Chengdu’s cultural heritage.</li>
          </ul>
          <div v-if="tourInfo.id === 2">
            <ul>
              <li><span class="bold-text">Get Up Close with Pandas–</span> Step behind the scenes for an exclusive,
                hands-on experience feeding and caring for giant pandas—a memory you won’t forget.</li>
              <li><span class="bold-text">Discover Conservation Secrets–</span>
                Gain insider knowledge on panda protection and the important work that keeps these iconic animals safe.
              </li>
              <li><span class="bold-text"> Earn Your Volunteer Certificate–</span>Celebrate your contribution with an
                official certificate, marking your role in preserving one of China’s national treasures.</li>
              <li><span class="bold-text">Stroll Through Kuan-Zhai Alleys–</span> Immerse yourself in Chengdu’s living
                history, exploring charming alleys filled with traditional architecture, artisan crafts, and the
                irresistible flavors of Sichuan culture.</li>

            </ul>
          </div>
          <div v-if="tourInfo.id === 3">
            <ul>
              <li><span class="bold-text">Architectural Discovery</span>– Learn about the unique buildings and history of Ganbao Tibetan Village.</li>
              <li><span class="bold-text">Authentic Cuisine </span>–
                Savor a traditional Tibetan lunch with fresh, local ingredients.</li>
              <li><span class="bold-text"> Butter Tea Workshop</span>– Try your hand at making this essential Tibetan beverage.</li>
              <li><span class="bold-text">Cultural Arts </span>– Optional sessions in Thangka painting, embroidery, and paper-cutting.</li>
              <li><span class="bold-text"> Dress & Celebrate </span>– Wear traditional Tibetan attire, enjoy a yak hotpot, join the Guozhuang dance, and share in the warmth of a bonfire gathering.</li>
              
            </ul>
          </div>
          <div v-if="tourInfo.id === 8">
            <ul>
              <li><span class="bold-text">Roots of Taoism</span> – Journey to Mount Qingcheng, where Taoism first
                flourished, rich in history and legend.</li>
              <li><span class="bold-text">Scenic Hike</span> – Trek along forested paths on a gentle 1,600-meter ascent,
                ideal for nature lovers.</li>
              <li><span class="bold-text">Close Panda Encounters</span> – Witness giant pandas in a setting that mirrors
                their natural wilderness.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 9">
            <ul>
              <li><span class="bold-text">Immerse in Emei's Ancient Wilderness</span> – Step into lush, age-old forests
                alive with diverse flora and vibrant wildlife.</li>
              <li><span class="bold-text">Feel the Pulse of Sacred Monasteries</span> – Wander through historic temples
                where centuries-old Buddhist chants create a serene atmosphere.</li>
              <li><span class="bold-text">Marvel at the Golden Summit</span> – Stand in awe before the gleaming gilded
                temples crowning Mount Emei, especially breathtaking at sunrise or sunset.</li>
              <li><span class="bold-text">Stroll Huanglongxi's Tranquil Waterways</span> – Meander along calm rivers
                flanked by traditional Sichuanese architecture, and soak in the timeless charm of this ancient town.
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Itinerary" name="third">
          <div v-if="tourInfo.id === 1">
            <ul>
              <li><span class="bold-text"> 08:30 AM</span> Hotel pick-up and departure </li>

              <li><span class="bold-text">10:00 – 12:00 PM</span>Explore Panda Valley and observe giant pandas
              </li>
              <li><span class="bold-text">12:30 – 01:30 PM</span> lunch</li>
              <li><span class="bold-text">02:00 – 03:30 PM</span>Take part in a Kung Fu or Tai Chi lesson guided by
                professional masters</li>
              <li><span class="bold-text">04:00 – 04:30 PM</span> Visit the famous Zhongshu Bookstore
              </li>
              <li><span class="bold-text">05:00 – 06:00 PM</span> Discover Yantianwo Square and stroll across the
                historic Nanqiao Bridge</li>
              <li><span class="bold-text">07:30 PM</span> Return to hotel</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <ul>
              <li><span class="bold-text"> 07:30 / 8:00 AM</span> Hotel pick-up and start your Chengdu adventure. </li>

              <li><span class="bold-text">09:00 AM – 03:00 PM</span>Hands-on Panda Volunteer Experience – feed, care
                for, and interact with giant pandas, earning your official volunteer certificate.
              </li>
              <li><span class="bold-text">03:00 PM – 04:00 PM</span> Transfer to Kuan-Zhai Alleys, enjoying a scenic
                drive through Chengdu.</li>
              <li><span class="bold-text">04:00 PM – 05:30 PM</span>Explore Kuan-Zhai Alleys – wander the historic
                lanes, admire traditional architecture, shop for local crafts, and savor the flavors of Sichuan.</li>
              <li><span class="bold-text">06:00 PM</span> Return to your hotel, concluding a full day of wildlife and
                cultural experiences.
              </li>

            </ul>
          </div>
          <div v-if="tourInfo.id === 3">
            <ul>
              <li><span class="bold-text"> 08:30 AM</span> Pick-up from your hotel and start your Tibetan adventure.</li>

              <li><span class="bold-text">11:00 AM – 12:00 PM</span> Explore Ganbao Valley, discovering the village’s culture, architecture, and scenic charm.
              </li>
              <li><span class="bold-text">12:00 PM </span> Enjoy an authentic Tibetan lunch, savoring traditional flavors made with local ingredients.</li>
              <li><span class="bold-text">02:00 PM – 04:00 PM</span>Participate in optional cultural activities, including Thangka painting, embroidery, or paper-cutting, to experience Tibetan artistry firsthand. </li>
              <li><span class="bold-text">04:00 PM – 05:00 PM</span> Dress in traditional Tibetan attire for a memorable photo session capturing the essence of local culture.
              </li>
              <li><span class="bold-text"> 05:00 PM – 07:00 PM</span> Enjoy a yak hotpot dinner and join a Guozhuang dance around a lively bonfire, celebrating Tibetan hospitality and community spirit.</li>
              <li><span class="bold-text"> 09:30 PM</span> Return to your hotel, concluding a full day of unforgettable Tibetan experiences.</li>


            </ul>
          </div>
          <div v-if="tourInfo.id === 8">
            <ul>
              <li><span class="bold-text">8:00 AM</span> – Pick up from your hotel and start your day of adventure</li>
              <li><span class="bold-text">9:30 AM – 11:30 AM</span> – Explore Panda Valley, observing pandas in a
                naturalistic habitat and capturing their playful moments</li>
              <li><span class="bold-text">12:30 PM</span> – Enjoy a relaxing lunch break, refueling for the afternoon's
                journey</li>
              <li><span class="bold-text">1:30 PM – 4:30 PM</span> – Hike through Mount Qingcheng, wandering scenic
                trails, ancient temples, and serene spots that reveal the heart of Taoist culture</li>
              <li><span class="bold-text">5:30 PM</span> – Return to your hotel, concluding a day of wildlife wonders
                and spiritual discovery</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 9">
            <ul>
              <li><span class="bold-text">7:50 AM – Hotel Pickup</span> – Begin your day with a comfortable pickup from
                your hotel, ready for a scenic adventure.</li>
              <li><span class="bold-text">10:00 AM – 12:00 PM – Explore Mount Emei</span> – Wander through ancient
                forests and discover breathtaking landscapes, soaking in the spiritual aura of this UNESCO World
                Heritage site.</li>
              <li><span class="bold-text">1:00 PM – Lunch Break</span></li>
              <li><span class="bold-text">2:00 PM – 4:00 PM – Visit Huanglongxi Ancient Town</span> – Stroll along
                tranquil rivers, cross stone bridges, and admire traditional Sichuanese architecture, stepping back into
                a historic waterside settlement.</li>
              <li><span class="bold-text">5:00 PM – Return to Hotel</span> – Conclude your day with a comfortable ride
                back to your hotel, carrying memories of nature, culture, and heritage.</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Cost" name="fourth">
          <div v-if="tourInfo.id === 1">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Participation in Tai Chi & Martial Arts training sessions </li>
              <li>Professional tour guide services</li>
              <li>All required transportation during the tour</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Entrance ticket to Panda Valley</li>
              <li>Personal expenses, such as shopping or additional activities</li>
              <li>Tips for guides and drivers</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Comfortable transportation throughout the tour </li>
              <li>Services of a professional tour guide</li>
              <li>Service fees</li>
              <li>Applicable taxes</li>

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Meals</li>
              <li>Optional activities</li>
              <li>Personal expenses, such as shopping</li>
              <li>Tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 3">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Meals as part of the day’s itinerary </li>
              <li>Professional tour guide to lead and explain your experiences</li>
              <li>Service fees</li>
              <li>Applicable taxes</li>

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Transportation</li>
              <li>Optional activities or workshops beyond the main itinerary</li>
              <li>Personal expenses, such as shopping or souvenirs</li>
              <li>Tips for guides or staff</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 8">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Transportation to and from the attractions</li>
              <li>Services of an experienced tour guide</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Meals and drinks</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses such as shopping</li>
              <li>Tips and gratuities</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 9">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Private transportation</li>
              <li>Professional tour guide throughout the trip</li>
              <li>Tax</li>
            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Meals and beverages</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses, including shopping</li>
              <li>Gratuities and tips</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Important info" name="five">
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Cancellation Policy</span></p>
          1.Full Refund: Cancel at least 24 hours before the tour to receive a 100% refund.
          <ul>
            <li>Note: If you paid via PayPal or a PayPal-authorized credit card, a 4.4% transaction fee will be deducted
              and is non-refundable, as we cannot recover it from PayPal. </li>
            <li>Example: If you paid $100 via PayPal and cancel more than 24 hours in advance, you will receive $95.60
              back, with $4.40 deducted for the fee.</li>

          </ul>
          2.No Refund: Cancellations less than 24 hours before the tour or no-shows will not be refunded.
          <p style="margin-top: 2%;"><span style="font-weight: bold;">What if it rains or the weather is bad?</span></p>
          <div>1.Tours run rain or shine, so bringing an umbrella is recommended if needed.</div>
          <div>2.In case of extreme weather (e.g., hurricanes, heavy storms, or extreme heat), the tour will be canceled
            at least one day in advance and a full refund will be issued.</div>
          <p style="margin-top: 2%;"><span style="font-weight: bold;">Dietary Information</span></p>
          <ul>
            <li>
              <p>1.Advance Notice</p>For tours that include meals, please inform us of any dietary requirements (e.g.,
              food allergies, vegetarian preferences) at the time of booking, so we can make the necessary arrangements.
            </li>
            <li>
              <p>2.Allergies</p>While we will do our best to accommodate common food allergies, we cannot guarantee a
              completely allergen-free environment. Cross-contamination (e.g., with nuts, gluten, or seafood) may occur
              in
              local kitchens.
            </li>
            <li>
              <p>3.Vegetarian Options</p>Vegetarian meals may be available upon request. However, please note that in
              some
              destinations, vegetarian options are limited as many traditional dishes feature meat or animal-based
              seasonings.
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
// Tour 1 images
import img1 from '@/assets/cd/cd1-1.jpg';
import img2 from '@/assets/cd/cd1-2.jpg';
import img3 from '@/assets/cd/cd1-3.jpg';
import img4 from '@/assets/cd/cd1-4.jpg';
import img5 from '@/assets/cd/cd1-5.jpg';
import img6 from '@/assets/cd/cd1-6.jpg';
import img7 from '@/assets/cd/cd1-7.jpg';
import img8 from '@/assets/cd/cd1-8.jpg';

// Tour 2 images
import img9 from '@/assets/cd/cd2-1.jpg';
import img10 from '@/assets/cd/cd2-2.jpg';
import img11 from '@/assets/cd/cd2-3.jpg';
import img12 from '@/assets/cd/cd2-4.jpg';
import img13 from '@/assets/cd/cd2-5.jpg';
import img14 from '@/assets/cd/cd2-6.jpg';
import img15 from '@/assets/cd/cd2-7.jpg';
import img16 from '@/assets/cd/cd2-8.jpg';

// Tour 3 images
import img17 from '@/assets/cd/cd3-1.jpg';
import img18 from '@/assets/cd/cd3-2.jpg';
import img19 from '@/assets/cd/cd3-3.jpg';
import img20 from '@/assets/cd/cd3-4.jpg';
import img21 from '@/assets/cd/cd3-5.jpg';
import img22 from '@/assets/cd/cd3-6.jpg';
import img23 from '@/assets/cd/cd3-7.jpg';
import img24 from '@/assets/cd/cd3-8.jpg';
//
import cdimg1 from '@/assets/sichuan/1.jpg';
import cdimg2 from '@/assets/sichuan/2.jpg';
import cdimg3 from '@/assets/sichuan/3.jpg';
import cdimg4 from '@/assets/sichuan/4.jpg';
import cdimg6 from '@/assets/sichuan/6.jpg';
import cdimg7 from '@/assets/sichuan/7.jpg';
import cdimg8 from '@/assets/sichuan/8.jpg';


import em1 from '@/assets/sichuan/em1.jpg';
import em2 from '@/assets/sichuan/em2.jpg';
import em3 from '@/assets/sichuan/em3.jpg';
import em5 from '@/assets/sichuan/em5.jpg';
import em4 from '@/assets/sichuan/em4.jpg';
import em6 from '@/assets/sichuan/em6.jpg';
import em7 from '@/assets/sichuan/em7.jpg';
import em8 from '@/assets/sichuan/em8.jpg';

export default {
  name: "Detail",
  components: {
    Header,
  },
  data() {
    return {
      tourInfo: {
        id: null,
        title: "",
        adultPrice: 0,
        childPrice: 0,
        ageNote: "Adult ages 13 and above, Child ages 4–12"
      },
      images: [],
      currentImage: '',
      showZoom: false,
      maskLeft: 0,
      maskTop: 0,
      maskSize: 100,
      zoomScale: 2,
      imageWidth: 0,
      imageHeight: 0,
      activeName: 'first',
      intervalId: null,
      autoPlay: true,
      slideInterval: 5000
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
    const id = parseInt(this.$route.params.id);
    this.loadTourData(id);
    this.setImageSize();
    window.addEventListener('resize', this.setImageSize);
    if (this.autoPlay && this.images.length > 1) {
      this.startAutoPlay();
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setImageSize);
    this.stopAutoPlay();
  },
  methods: {
    formatPrice(price) {
      return Number(price).toFixed(2);
    },
    loadTourData(id) {
      this.tourInfo.id = id;

      if (id === 1) {
        this.images = [img1, img2, img3, img4, img5, img6, img7, img8];
        this.tourInfo.title = "Home of Kung Fu Panda – Pandas, Martial Arts & Tai Chi Wonders";
        this.tourInfo.adultPrice = 255;

      } else if (id === 2) {
        this.images = [img9, img10, img11, img12, img13, img14, img15, img16];
        this.tourInfo.title = "Panda Volunteer Experience & Kuanzhai Alley Exploration";
        this.tourInfo.adultPrice = 255;

      } else if (id === 3) {
        this.images = [img17, img18, img19, img20, img21, img22, img23, img24];
        this.tourInfo.title = "Zhujiajiao Watertown: Historic Water Town & Canal Cruise";
        this.tourInfo.adultPrice = 169;
        this.tourInfo.childPrice = 129;
      } else if (id === 8) {
        this.images = [cdimg1,
          cdimg2,
          cdimg3,
          cdimg4,
          cdimg6,
          cdimg7,
          cdimg8,
        ];
        this.tourInfo.title = "Mount Qingcheng & Panda Valley Day Tour";
        this.tourInfo.adultPrice = 125;
        this.tourInfo.childPrice = 125; // 如果儿童价格相同
      } else if (id === 9) {
        this.images = [em1,
          em2,
          em3,
          em4,
          em5,
          em6,
          em7,
          em8,

        ];
        this.tourInfo.title = "Emei Mountain & Ancient Town of Huanglongxi";
        this.tourInfo.adultPrice = 125;
        this.tourInfo.childPrice = 125;
      }

      this.currentImage = this.images.length > 0 ? this.images[0] : '';
    },
    setActiveImage(img) {
      this.currentImage = img;
      this.showZoom = false;
      this.resetAutoPlay();
    },
    nextImage() {
      const currentIndex = this.images.indexOf(this.currentImage);
      const nextIndex = (currentIndex + 1) % this.images.length;
      this.currentImage = this.images[nextIndex];
      this.showZoom = false;
    },
    startAutoPlay() {
      this.stopAutoPlay();
      if (this.images.length <= 1) return;
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
      this.stopAutoPlay();
      if (this.autoPlay && this.images.length > 1) {
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
    handleClick(tab) {
      // Tab 切换回调
    }
  },
  watch: {
    '$route.params.id'(newId) {
      const id = parseInt(newId);
      this.loadTourData(id);
      this.resetAutoPlay();
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

a {
  color: #0000ee;
  text-decoration: underline;
}

a:visited {
  color: #551a8b;
}

a:hover {
  color: #0000ff;
}
</style>