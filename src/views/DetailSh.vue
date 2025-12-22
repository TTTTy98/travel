<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    
 <section class="detail-section">
  <div class="detail-layout">
    <!-- 左侧缩略图 -->
    <div class="thumb-column">
      <div class="thumb-list">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="thumb"
          :class="{ active: img === currentImage }"
          @click="setActiveImage(img)"
        >
          <img :src="img" alt="Thumbnail" />
        </div>
      </div>
    </div>

    <!-- 中间主图（自动居中） -->
    <div class="main-image-wrapper">
      <div class="image-container">
        <transition name="fade" mode="out-in">
          <img
            :src="currentImage"
            class="main-img"
            ref="mainImage"
            :key="currentImage"
            alt="Main product image"
          />
        </transition>
        <div class="mask" v-if="showZoom" :style="{ top: maskTop + 'px', left: maskLeft + 'px' }"></div>
      </div>
    </div>

    <!-- 右侧产品信息 -->
    <div class="info-column">
      <div class="product-info-simple">
        <h1 class="main-title">{{ tourInfo.title }}</h1>
        <div class="price-section">
          <div class="price-item adult-price">
            <span class="price-amount">${{ formatPrice(tourInfo.adultPrice) }}</span>/Pax
          </div>
          <!-- <div class="price-item child-price">Child: ...</div> -->
        </div>
        <div class="age-note">{{ tourInfo.ageNote }}</div>
      </div>
    </div>
  </div>
</section>

    <!-- Tabs 区域 -->
    <div class="tabs-section">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- ========== 所有 Tab 内容完全保留 ========== -->
        <el-tab-pane label="Overview" name="first">
          <div v-if="tourInfo.id === 1">
            Start your day the Shanghai way, through its breakfast tables and historic streets. This walking food tour
            combines authentic morning flavors with stories hidden behind the city’s landmarks. From century-old dessert
            shops and bustling food stalls to iconic boulevards like Nanjing Road, People’s Square, Suzhou Creek, and
            the Bund, you’ll explore how Shanghai grew from a riverside town into a global metropolis, all while tasting
            the dishes that fuel the city every morning. Perfect for first-time visitors and long-term residents alike,
            this journey blends culinary discovery and cultural immersion in just a few hours.
            <p><span style="font-weight: bold;">What You’ll Experience</span></p>
            <ul>
              <li> <span class="bold-text">Soup Dumplings Restaurant (est. 1986)</span>
                <p>Taste Shanghai’s iconic xiaolongbao: thin-skinned dumplings
                  bursting with crab roe broth. Alongside them, enjoy a tender pork chop with surprising Western
                  influence
                  and a comforting bowl of wontons in soup—each dish reflecting the city’s culinary evolution.</p>
              </li>
              <li> <span class="bold-text">Rice Sweets Restaurant (est. 1875)</span>
                <p>Begin with chewy glutinous rice cakes that have been a local favorite on Nanjing Road for over a
                  century. The fillings—red bean or sesame—strike a balance of sweetness and nuttiness. Pair them with a
                  warm cup of soy milk, a breakfast combination deeply rooted in Shanghai traditions.</p>
              </li>
              <li> <span class="bold-text">Nanjing Road</span>
                <p>Once the city’s commercial heart, Nanjing Road remains one of Shanghai’s busiest shopping avenues.
                </p>
              </li>
              <li><span class="bold-text">People’s Square</span>
                <p>Take a leisurely walk through People’s Square, the cultural heart of Shanghai, and let the flavors of
                  your meal settle as you wander. Nearby, discover a historic cinema and grand hotel that once towered
                  as
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
                <p>Indulge your sweet tooth with a traditional stewed milk pudding, a dessert with roots in southern
                  China
                  since the 19th century, now cherished nationwide for its silky richness. For something fruity, try the
                  mango-inspired creations, a refreshing twist beloved by dessert lovers.</p>
              </li>
              <li><span class="bold-text">Scallion Pancake Stall</span>
                <p>Another street-food favorite is the scallion pancake, made by layering dough with fragrant green
                  onions, then pan-fried until crispy and aromatic. The result is a snack that’s flaky, savory, and
                  irresistibly satisfying.</p>
              </li>
              <li><span class="bold-text">Suzhou Creek</span>
                <p>Enjoy one of the most underrated skyline views of Pudong. Along the way, discover how the Huangpu
                  River
                  and Suzhou Creek helped Shanghai transform from a quiet water town into an international metropolis.
                </p>
              </li>
              <li><span class="bold-text">The Bund</span>
                <p>Finally, immerse yourself in the grandeur of the Bund, Shanghai’s iconic waterfront. Once called the
                  “Number One Street in the Far East,” it was the stage where international talent and capital
                  converged,
                  creating a dazzling display of prosperity. Behind the grand facades lie untold stories of the city’s
                  golden era and its defining moments in history.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <div class="paragraph">
              The Fengjing watertowns remain as one of the few places where authentic daily life still flows alongside
              its canals. Here, locals sell homemade snacks, converse in Shanghainese, and have lived there for
              generations, keeping the old traditional way of living alive.</div>
            <div class="paragraph">
              On this guided day trip, you’ll wander cobbled alleys, admire centuries-old bridges, and visit cultural
              landmarks that reveal the town’s rich past—from a grand merchant’s mansion to the preserved site of a
              Mao-era People’s Commune with its secret underground bunkers. Drift along the waterways on a private boat,
              savor authentic Shanghai dishes by the river, and hear fascinating stories of education, trade, and
              resilience that shaped the town’s character.</div>
            <div class="paragraph">
              Just an hour’s drive from Shanghai, Fengjing offers a serene escape from the city and a chance to
              experience the essence of a living watertown—intimate, historical, and deeply local.
            </div>
          </div>
          <div v-if="tourInfo.id === 3">
            <div class="paragraph">
              Just an hour from central Shanghai, Zhujiajiao is a sprawling historic water town with over 1,700 years of
              history, renowned for its 36 ancient stone bridges and well-preserved Ming and Qing architecture. The
              town’s streets are dense and charming, and its waterways form a picturesque grid, creating a classic
              Jiangnan water-town atmosphere that has endured for centuries.</div>
            <div class="paragraph">
              Among its many bridges, the Fangsheng Bridge stands out as the town’s most iconic landmark. Built over 500
              years ago, this elegant stone bridge features three graceful arches and a gently curved walkway.
              Historically, locals would release fish and turtles here for good luck, giving the bridge its name, which
              means “Life Release Bridge.” Today, it remains a symbol of Zhujiajiao’s charm and history, perfect for
              strolling, photography, and admiring the surrounding canals.</div>
            <div class="paragraph">
              Visitors can wander along stone-paved streets, cross historic bridges, or take a boat ride along the
              canals for a unique view of the town. The town also offers a variety of riverside restaurants, cozy cafés,
              and lively snack streets, making it easy to enjoy local delicacies while soaking in the serene scenery.
              With its extensive size, historic charm, dense waterways, and vibrant yet relaxed atmosphere, Zhujiajiao
              is ideal for travelers seeking cultural exploration, photography, and a full-day escape into classic
              Jiangnan life just outside Shanghai.
            </div>
          </div>
          <div v-if="tourInfo.id === 4">
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
          <div v-if="tourInfo.id === 5">
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
          <div v-if="tourInfo.id === 1">
            <ul>
              <li><span class="bold-text">Authentic Breakfast Tastes</span>
                <p>Savor egg pancakes, soup dumplings,
                  crispy buns, scallion pancakes, and traditional Chinese desserts, many from time-honored restaurants
                  dating
                  back over a century.</p>
              </li>
              <li><span class="bold-text">Hidden Food Stories </span>
                <p>
                  Learn the origins and rivalries behind Shanghai’s breakfast classics, from the debate over pan-fried
                  buns
                  to
                  the city’s unique Western influences on local dishes.</p>
              </li>
              <li><span class="bold-text"> Historic Walk </span>
                <p>Pass through Nanjing Road,
                  once China’s first commercial hub; stroll People’s Square and uncover the history of its cinema,
                  hotels,
                  and
                  even its weekend marriage market.</p>
              </li>
              <li><span class="bold-text">Cultural Landmarks </span>
                <p> Take in the skyline
                  from Suzhou Creek and walk along the Bund, discovering untold stories of how Shanghai became the “No.1
                  city
                  of the Far East.”</p>
              </li>
              <li><span class="bold-text"> Perfect Morning Experience</span>
                <p>A compact
                  yet rich journey that satisfies both the stomach and the mind, combining food, history, and culture.
                </p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <ul>
              <li><span class="bold-text">Stroll through a living watertown</span>
                <p>Wander narrow lanes and bustling markets where centuries-old customs remain part of daily life and
                  taste traditional snacks.</p>
              </li>
              <li><span class="bold-text">Private boat ride beneath ancient bridges</span>
                <p>Glide along tranquil canals on a private boat, passing arched stone bridges and riverside homes while
                  your guide shares local stories.</p>
              </li>
              <li><span class="bold-text">Riverside home-style lunch</span>
                <p>Savor a freshly prepared riverside meal of authentic Shanghai home cooking made from seasonal
                  ingredients and family recipes.</p>
              </li>
              <li><span class="bold-text">Visit a restored merchant mansion</span>
                <p>Step inside a traditional mansion once owned by a wealthy local family to explore ornate woodwork,
                  inner courtyards, and period furnishings.</p>
              </li>
              <li><span class="bold-text">Explore a Mao-era People’s Commune site</span>
                <p>Discover a rare commune complex from the Mao era, including preserved communal buildings and
                  underground bunkers that reveal social and historical context.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 3">
            <ul>
              <li><span class="bold-text">Historic Water Town</span><p>Over 1,700 years of history and a sprawling layout
                to explore.</p></li>
              <li><span class="bold-text">36 Ancient Stone Bridges </span><p>
                Including the iconic Fangsheng Bridge, built over 500 years ago.</p></li>
              <li><span class="bold-text"> Ming & Qing Architecture </span><p> Well-preserved traditional houses lining
                stone-paved streets.</p></li>
              <li><span class="bold-text">Picturesque Canals </span><p> Waterways crisscross the town, perfect for
                photography and exploration.</p></li>
              <li><span class="bold-text"> Boat Ride Experience </span><p> Leisurely boat tours through the canals for a
                unique perspective.</p></li>
              <li><span class="bold-text"> Riverside Dining </span><p> Cafés and restaurants along the canals for local
                snacks and meals.</p></li>
              <li><span class="bold-text"> Cultural Immersion </span><p> Stroll through lively streets, observe
                traditional crafts, and daily life.</p></li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 4">
            <ul>
              <li><span class="bold-text">Roots of Taoism</span> – Journey to Mount Qingcheng, where Taoism first
                flourished, rich in history and legend.</li>
              <li><span class="bold-text">Scenic Hike</span> – Trek along forested paths on a gentle 1,600-meter ascent,
                ideal for nature lovers.</li>
              <li><span class="bold-text">Close Panda Encounters</span> – Witness giant pandas in a setting that mirrors
                their natural wilderness.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 5">
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
              <li><span class="bold-text"> 8:30 / 9:00 AM | Meet Your Guide</span>
                <p>Gather at McDonald’s, Location:
                  McDonald’s, 720 Nanjing East Road, Huangpu District, Shanghai, China, 200070.<a
                    href="https://maps.app.goo.gl/yQqhATQ7HK61Nih37">（Open in google maps）</a> </p>
              </li>
              <li><span class="bold-text">Begin the Food Walk</span>
                <p>Start your journey with authentic Shanghai
                  breakfasts
                  and desserts at several time-honored restaurants，strolling through landmarks such as Nanjing Road,
                  People’s Square, Suzhou Creek, and the Bund. Along the way, taste local specialties like soup
                  dumplings,
                  crispy buns, scallion pancakes, and traditional desserts from century-old restaurants.</p>
              </li>
              <li><span class="bold-text">Tour Duration</span>
                <p> The walk typically lasts around 4 hours, covering
                  approximately 4.5 kilometers. Please wear suitable walking shoes, and prepare an umbrella in case of
                  rainy
                  weather.</p>
              </li>
              <li><span class="bold-text"> End Point</span>
                <p> The tour concludes at the Bund, where the Huangpu River and
                  Shanghai’s skyline create the city’s most iconic view.</p>
              </li>
              <li><span class="bold-text">Please Note</span>
                <p> Hotel pickup and drop-off are not included in this tour.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <div class="bold-text">Morning (9:00 AM):</div>
            <div>Pick up from hotel. Travel by private car to Fengjing Watertown, located about 60 km away (1–1.5 hours’
              drive). Along the way, your guide will share insights into Shanghai life and history.</div>
            <div class="bold-text">Daytime in Fengjing:</div>
            <ul>
              <li> Stroll through riverside alleys and sample traditional snacks</li>
              <li>Visit the Wang Family Mansion, a historic residence reflecting traditional Chinese architecture and
                values</li>
              <li>Cross centuries-old stone bridges and enjoy scenic canal views</li>
              <li>Explore the Former People’s Commune site and hidden bunker system from the Mao era</li>
              <li>Sit down for a hearty riverside lunch featuring authentic Shanghai dishes prepared by local families
              </li>
              <li>Enjoy a private boat ride through the waterways, gliding past historic houses and ancient bridges</li>
              <li>Discover the Former Residence of a Zhuangyuan, and learn about China’s imperial examination system
              </li>
            </ul>
            <div class="bold-text">Afternoon:</div>
            <div>Return journey by private car to Shanghai city center (1–1.5 hours).</div>
            <div class="bold-text">Total duration:</div>
            <div> Approximately 6–7 hours</div>
          </div>
          <div v-if="tourInfo.id === 3">
            <div class="bold-text">Morning – Departure from Shanghai:</div>
            <div>Pick up from hotel. Travel by private car to Fengjing Watertown, located about 60 km away (1–1.5 hours’
              drive). Along the way, your guide will share insights into Shanghai life and history.</div>
            <div class="bold-text">Daytime – Explore Zhujiajiao:</div>
            <ul>
              <li> Stroll along stone-paved streets and cross centuries-old bridges, including the iconic Fangsheng
                Bridge.</li>
              <li>Take a boat ride along the canals to experience the town from a unique perspective.</li>
              <li>Enjoy a riverside lunch at a local café or restaurant, savoring fresh local delicacies while soaking
                in the serene scenery.</li>
              <li>Explore historic alleys, traditional shops, and cultural spots, capturing photos of charming bridges
                and waterways.</li>
            </ul>
            <div class="bold-text">Afternoon– Return to Shanghai:</div>
            <div>Return journey by private car to Shanghai city center (1–1.5 hours)</div>
            <div class="bold-text">Total duration:</div>
            <div> Approximately 6–7 hours</div>
          </div>
          <div v-if="tourInfo.id === 4">
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
          <div v-if="tourInfo.id === 5">
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

        <el-tab-pane label="What’s included" name="fourth">
          <div v-if="tourInfo.id === 1">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Professional English-speaking guide </li>
              <li>Hearty traditional Chinese breakfast at 5+ authentic local eateries (enough to keep you satisfied for
                the rest of the morning)</li>
              <li>Private taxi transfer from People’s Square to Suzhou Creek</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Hotel pickup and drop-off</li>
              <li>Personal expenses such as additional food, drinks, or shopping</li>
              <li>Gratuities for the guide</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Professional English-speaking guide </li>
              <li>Private car transfer with pick-up and drop-off from your hotel or chosen location</li>
              <li>Authentic Shanghai-style lunch and selected local snacks</li>
              <li>Private boat ride along Fengjing’s waterways</li>
              <li>Entry to the Former Site of the People’s Commune and bunker system</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Personal expenses (shopping, additional food or drinks)</li>
              <li>Gratuities for guide and driver</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 3">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Professional English-speaking guide </li>
              <li>Private car transfer with pick-up and drop-off from your hotel or chosen location</li>
              <li>Authentic Shanghai-style lunch</li>
              <li>Boat ride</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Personal expenses (shopping, additional food or drinks)</li>
              <li>Gratuities for guide and driver</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 4">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Transportation to and from the attractions</li>
              <li>Services of an experienced tour guide</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals and drinks</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses such as shopping</li>
              <li>Tips and gratuities</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 5">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Private transportation</li>
              <li>Professional tour guide throughout the trip</li>
              <li>Tax</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals and beverages</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses, including shopping</li>
              <li>Gratuities and tips</li>
            </ul>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Important info" name="five">
          <p style="margin-top: 2%;"><span class="bold-text">Cancellation Policy</span></p>
          Full Refund: Cancel at least 24 hours before the tour to receive a 100% refund.
          <ul>
            <li>Note: If you paid via PayPal or a PayPal-authorized credit card, a 4.4% transaction fee will be deducted
              and is non-refundable, as we cannot recover it from PayPal. </li>
            <li>Example: If you paid $100 via PayPal and cancel more than 24 hours in advance, you will receive $95.60
              back, with $4.40 deducted for the fee.</li>
          </ul>
          No Refund: Cancellations less than 24 hours before the tour or no-shows will not be refunded.
          <p style="margin-top: 2%;"><span class="bold-text">What if it rains or the weather is bad?</span></p>
          <div>Tours run rain or shine, so bringing an umbrella is recommended if needed.</div>
          <div>In case of extreme weather (e.g., hurricanes, heavy storms, or extreme heat), the tour will be canceled
            at least one day in advance and a full refund will be issued.</div>
          <p style="margin-top: 2%;"><span class="bold-text">Dietary Information</span></p>
          <ul>
            <li>
              <p><span style="font-weight: bold;">Advance Notice</span></p>For tours that include meals, please inform
              us of any dietary requirements (e.g.,
              food allergies, vegetarian preferences) at the time of booking, so we can make the necessary arrangements.
            </li>
            <li>
              <p><span style="font-weight: bold;">Allergies</span></p>While we will do our best to accommodate common
              food allergies, we cannot guarantee a
              completely allergen-free environment. Cross-contamination (e.g., with nuts, gluten, or seafood) may occur
              in
              local kitchens.
            </li>
            <li>
              <p><span style="font-weight: bold;">Vegetarian Options</span></p>Vegetarian meals may be available upon
              request. However, please note that in
              some
              destinations, vegetarian options are limited as many traditional dishes feature meat or animal-based
              seasonings.
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>

    <OtherSh :exclude-id="tourInfo.id" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import OtherSh from "@/components/OtherSh.vue";
import Footer from "@/components/Footer.vue";

// Tour 1 images
import img1 from '@/assets/sh-1-1.jpg';
import img2 from '@/assets/sh-1-2.jpg';
import img3 from '@/assets/sh-1-3.jpg';
import img4 from '@/assets/sh-1-4.jpg';
import img5 from '@/assets/sh-1-5.jpg';
import img6 from '@/assets/sh-1-6.jpg';
import img7 from '@/assets/sh-1-7.jpg';
import img8 from '@/assets/sh-1-8.jpg';

// Tour 2 images
import img9 from '@/assets/sh-2-1.jpg';
import img10 from '@/assets/sh-2-2.jpg';
import img11 from '@/assets/sh-2-3.jpg';
import img12 from '@/assets/sh-2-4.jpg';
import img13 from '@/assets/sh-2-5.jpg';
import img14 from '@/assets/sh-2-6.jpg';
import img15 from '@/assets/sh-2-7.jpg';
import img16 from '@/assets/sh-2-8.jpg';

// Tour 3 images
import img17 from '@/assets/sh-3-1.jpg';
import img18 from '@/assets/sh-3-2.jpg';
import img19 from '@/assets/sh-3-3.jpg';
import img20 from '@/assets/sh-3-4.jpg';
import img21 from '@/assets/sh-3-5.jpg';
import img22 from '@/assets/sh-3-6.jpg';
import img23 from '@/assets/sh-3-7.jpg';
import img24 from '@/assets/sh-3-8.jpg';

//
import cdimg1 from '@/assets/sichuan/1.jpg';
import cdimg2 from '@/assets/sichuan/2.jpg';
import cdimg3 from '@/assets/sichuan/3.jpg';
import cdimg4 from '@/assets/sichuan/4.jpg';
import cdimg6 from '@/assets/sichuan/6.jpg';
import cdimg7 from '@/assets/sichuan/7.jpg';
import cdimg8 from '@/assets/sichuan/8.jpg';
import cdimg9 from '@/assets/sichuan/9.jpg';
import cdimg10 from '@/assets/sichuan/10.jpg';
import cdimg11 from '@/assets/sichuan/11.jpg';
//
import em1 from '@/assets/sichuan/em1.jpg';
import em2 from '@/assets/sichuan/em2.jpg';
import em3 from '@/assets/sichuan/em3.jpg';
import em5 from '@/assets/sichuan/em5.jpg';
import em4 from '@/assets/sichuan/em4.jpg';
import em6 from '@/assets/sichuan/em6.jpg';
import em7 from '@/assets/sichuan/em7.jpg';
import em8 from '@/assets/sichuan/em8.jpg';
import em9 from '@/assets/sichuan/em9.jpg';
import em10 from '@/assets/sichuan/em10.jpg';
import em11 from '@/assets/sichuan/em11.jpg';
import em12 from '@/assets/sichuan/em12.jpg';
import em13 from '@/assets/sichuan/em13.jpg';

export default {
  name: "DetailSh",
  components: {
    Header,
    OtherSh,
    Footer
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
        this.tourInfo.title = "Taste of Tradition: Shanghai Breakfast Tour";
        this.tourInfo.adultPrice = 69;
        this.tourInfo.childPrice = 50;
      } else if (id === 2) {
        this.images = [img9, img10, img11, img12, img13, img14, img15, img16];
        this.tourInfo.title = "Fengjing Watertown: A Journey into Shanghai’s Hidden Waterways";
        this.tourInfo.adultPrice = 159;
        this.tourInfo.childPrice = 119;
      } else if (id === 3) {
        this.images = [img17, img18, img19, img20, img21, img22, img23, img24];
        this.tourInfo.title = "Zhujiajiao: Shanghai’s Most Iconic Water Town & Private Canal Cruise";
        this.tourInfo.adultPrice = 169;
        this.tourInfo.childPrice = 129;
      } else if (id === 4) {
        this.images = [cdimg1, cdimg2, cdimg3, cdimg4, cdimg6, cdimg7, cdimg8, cdimg9, cdimg10, cdimg11];
        this.tourInfo.title = "Mount Qingcheng & Panda Valley Day Tour";
        this.tourInfo.adultPrice = 125;
        this.tourInfo.childPrice = 125;
      } else if (id === 5) {
        this.images = [em1, em2, em3, em4, em5, em6, em7, em8, em9, em10, em11, em12, em13];
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
    handleClick(tab) {}
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

/* ========== PC 端主布局 ========== */
.detail-section {
  background-color: white;
  padding: 30px 0;
  display: flex;
  justify-content: center;
}

.detail-layout {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  gap: 30px; /* 控制三栏间距 */
}

/* 左侧缩略图 */
.thumb-column {
  flex: 0 0 100px; /* 固定宽度 */
}

.thumb-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.thumb {
  width: 100px;
  height: 60px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb.active {
  border-color: #409eff;
}

/* 中间主图 */
.main-image-wrapper {
  flex: 0 0 auto;
}

.image-container {
  position: relative;
  width: 500px;
  height: 400px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  overflow: hidden;
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

/* 右侧产品信息 */
.info-column {
  flex: 1;
  max-width: 400px;
}

.product-info-simple {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 12px;
}

.main-title {
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  color: #333;
  line-height: 1.3;
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
}

/* Tabs 区域（保留原始样式） */
.tabs-section {
  background-color: white;
  padding: 0 20%;
  display: flex;
  justify-content: center;
}

.tabs-section .el-tabs {
  width: 100%;
  max-width: 900px;
}

:deep(.el-tabs__item) {
  background-color: #f0f0f0;
  font-weight: bold;
  padding: 0 20px;
  height: 44px;
  line-height: 44px;
  margin-right: 4px;
  border: none;
}

:deep(.el-tabs__item.is-active) {
  background-color: #e0e0e0;
  color: #333;
}

.paragraph {
  margin-bottom: 1.5em;
  font-size: 16px;
  line-height: 1.6;
}

ul {
  padding-left: 20px;
  margin: 12px 0;
}

ul li {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.6;
  color: #333; /* 或 #000，确保文字为深色 */
}

.bold-text {
  font-weight: bold;
  color: #d4a574;
}

/* ========== 移动端适配（<768px） ========== */
@media (max-width: 767px) {
  .detail-section {
    padding: 20px 15px;
  }

  .detail-layout {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0 15px;
  }

  .thumb-column,
  .main-image-wrapper,
  .info-column {
    flex: none;
    width: 100%;
    max-width: 500px;
  }

  .thumb-list {
    flex-direction: row;
    overflow-x: auto;
    padding: 4px 0;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .thumb-list::-webkit-scrollbar {
    display: none;
  }

  .thumb {
    width: 60px;
    height: 40px;
    flex: 0 0 auto;
  }

  .image-container {
    width: 100%;
    height: auto;
    aspect-ratio: 5 / 4;
    max-height: 400px;
  }

  .product-info-simple {
    text-align: center;
    padding-top: 0;
  }

  .main-title {
    font-size: 20px;
  }

  .price-item {
    font-size: 18px;
  }

  .price-amount {
    font-size: 20px;
  }

  .age-note {
    font-size: 12px;
  }

  .tabs-section {
    padding: 0 15px 30px;
  }

  .paragraph,
  ul li {
    font-size: 15px;
  }
}
</style>