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
            <div class="paragraph">Discover Chengdu: Land of Pandas & Martial Arts, the hometown of Kung Fu Panda, where
              adventure meets
              heritage. Get up close with giant pandas at Panda Valley, one of the world’s leading panda conservation
              centers, and experience the grace and power of Chinese martial arts in a city linked to legends like
              Jackie Chan and Bruce Lee.
            </div>
            <div class="paragraph">
              Explore Qingcheng Mountain, a UNESCO World Heritage Site and a 2,300-year-old hub of Tai Chi and
              traditional martial arts and learn directly from master instructors in this historic setting.
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
            <div class="paragraph">
              Kick off your day with an exclusive panda volunteering experience at the Giant Panda Breeding Research
              Base. Get up close with these beloved creatures as you feed and care for the pandas, stepping behind the
              scenes to see how conservation efforts protect these rare animals. Celebrate your contribution with a
              special volunteer certificate—a keepsake of your unforgettable day.
            </div>
            <div class="paragraph">Next, dive into the vibrant culture of Kuan-Zhai Alleys, wandering through historic
              lanes lined with
              ancient architecture, local artisan shops, and the irresistible aromas of Sichuan delicacies. This
              immersive itinerary perfectly blends hands-on wildlife conservation with rich cultural exploration,
              promising a truly memorable Chengdu adventure.
            </div>
          </div>
          <div v-if="tourInfo.id === 3">
            <div class="paragraph">
              Spend a full day immersed in the vibrant traditions of Ganbao Tibetan Village, where history, art, and
              community come alive. Start your morning with a guided stroll through the village, exploring its unique
              architecture and uncovering the stories that have shaped this remarkable place.</div>
            <div class="paragraph">
              At lunchtime, savor an authentic Tibetan meal, made with fresh, ecological ingredients that highlight the
              region’s distinctive flavors.</div>
            <div class="paragraph">
              In the afternoon, dive into local customs with a hands-on butter tea workshop, learning how this beloved
              drink is prepared and enjoyed every day. For those who want to explore even further, participate in
              creative workshops like Thangka painting, Tibetan embroidery, or traditional paper-cutting, all showcasing
              centuries of artistic heritage. Capture your experience by dressing in traditional Tibetan attire and
              taking memorable photos.
            </div>
            <div class="paragraph">
              As evening falls, gather for a hearty yak meat hotpot and join the locals in a lively Guozhuang dance,
              exchanging the traditional Hada greeting. End your day around a warm bonfire, soaking in the hospitality,
              spirit, and unity that make Tibetan culture truly unforgettable.
            </div>
          </div>
          <div v-if="tourInfo.id === 4">
            <div class="paragraph">Just a two-hour drive from Chengdu, Xiling Snow Mountain invites travelers into a
              winter wonderland of
              snowy peaks, whispering forests, and crisp alpine air. In a single day, you can leave the city behind
              and step into a landscape carved by glaciers, mist, and sunlight.</div>
            <div class="paragraph">The journey begins with a scenic ride through the western hills, arriving at one of
              Sichuan’s most
              beloved snow destinations. A cable car ascends above the treetops, opening up views of endless
              snowfields and sweeping panoramas.</div>
            <div class="paragraph">At Riyueping, the mountaintop stretches out like a frozen theater—Daxuetang Peak
              rises in the
              distance, sunlight sparkles on freshly fallen snow, and the only sound is the crunch of boots on powder.
              In winter, the area transforms into a living snow globe, offering breathtaking vistas across clouds and
              distant ridges.</div>
            <div class="paragraph">Whether wandering through snow-covered pine forests or enjoying sleds and skis,
              Xiling Snow Mountain
              welcomes anyone seeking the magic of the mountains without a long journey. As the sun dips, the snow
              glows golden, the air turns crisp, and the mountains leave a lasting impression—proof that nature’s
              beauty doesn’t need days to be unforgettable.</div>
            <div class="paragraph">Xiling Snow Mountain isn’t just a day trip; it’s a brief retreat into a world of
              snow, wonder, and
              alpine charm.</div>
          </div>
          <div v-if="tourInfo.id === 5">
            <ul>
              <li>Explore Sichuan: Pandas, Culture & Heritage</li>
              <li>Embark on a full-day adventure through the natural and cultural wonders of Sichuan. Begin with a close
                encounter with giant pandas, watching them play, munch bamboo, and roam freely in habitats designed to
                mimic their natural home. Then, travel to the UNESCO World Heritage Site of Leshan to marvel at the
                world’s largest stone Buddha, standing 71 meters tall and overlooking the rivers for over 1,200 years—a
                true symbol of peace and spiritual wisdom.</li>
              <li>This journey blends wildlife encounters with cultural exploration, offering an unforgettable
                experience of China’s breathtaking landscapes and rich heritage that will stay with you long after the
                day ends.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 6">
            <ul>
              <li>Discover Sichuan: Pandas, Tea & Scenic Wonders</li>
              <li>Embark on a full-day adventure through Sichuan’s ecological and cultural treasures. Begin at
                Bifengxia, a lush sanctuary for endangered giant pandas. Watch these adorable creatures up close in
                their natural habitat, surrounded by dense forests, cascading waterfalls, and vibrant biodiversity.
                Along the way, learn about global conservation efforts and deepen your appreciation for nature’s
                delicate balance.</li>
              <li>Next, head to Mengding Mountain, the cradle of China’s tea culture. Wander through ancient tea
                terraces that stretch across the hills, offering stunning panoramic views. Try your hand at traditional
                tea picking and discover the art of tea crafting, connecting with centuries of cultural heritage. The
                serene landscapes and fragrant tea fields create the perfect setting to relax, rejuvenate, and immerse
                yourself in local traditions.</li>
              <li>This immersive tour blends wildlife encounters, breathtaking scenery, and cultural experiences,
                promising an unforgettable journey into the heart of Sichuan’s natural and historical wonders.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 7">
            <ul>
              <li>Experience the best of Chengdu in one captivating day, blending wildlife, culture, and history. Start
                at Wolong Panda Base, a world-renowned sanctuary where giant pandas roam in semi-natural habitats. Join
                a morning feeding session for a close-up encounter with these beloved creatures while gaining insight
                into pioneering conservation efforts.</li>
              <li>Explore Yantianwo, home to the world’s largest panda sculpture, an artistic marvel perfect for photos
                and a playful glimpse into Chengdu’s creative spirit.</li>
              <li>Continue to Nanqiao, an ancient bridge steeped in history and famed for the enchanting “Blue Tears”
                phenomenon, when bioluminescent organisms illuminate the waters at night, creating a truly magical
                scene. This historic landmark has quietly witnessed centuries of Chengdu’s evolving culture.</li>
              <li>Wrap up your journey at the Zhongshu Bookstore, celebrated as one of the “Top 10 Most Beautiful
                Bookstores in the World.” Its stunning architecture and serene atmosphere offer a peaceful retreat,
                merging tradition and modernity in a literary haven.</li>
              <li>This carefully curated day trip offers a perfect balance of nature, art, and history, giving you a
                rich, unforgettable taste of Chengdu.</li>
            </ul>
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
          <div v-if="tourInfo.id === 10">
            <ul>
              <li>Escape the city and step into the untouched beauty of Bipenggou, a hidden gem in Sichuan’s Aba Tibetan
                and Qiang Autonomous Prefecture. Just a short drive transports you from urban life to soaring alpine
                peaks, where nature reveals a different masterpiece in every season.</li>
              <li>In spring, wildflowers blanket the valleys; summer brings refreshing forests and cascading streams;
                autumn sets the mountains ablaze with golden hues; and winter transforms the landscape into a sparkling
                wonderland.</li>
              <li>Beyond its breathtaking scenery, Bipenggou invites you to experience authentic Tibetan culture—wander
                through traditional villages, visit serene monasteries, and join lively festivals that celebrate the
                warmth and spirit of the Tibetan people.</li>
              <li>This unforgettable day trip combines natural splendor with cultural discovery, offering a journey into
                the very heart of Sichuan.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 11">
            <ul>
              <li>Discover Chengdu’s Cultural Heart</li>
              <li>Step into the vibrant soul of Chengdu, where ancient traditions meet modern energy. This day tour
                immerses you in the city’s rich cultural heritage with visits to Kuanzhai Alley and People's Park, two
                iconic landmarks that showcase Chengdu’s unique charm.</li>
              <li>Kuanzhai Alley, made up of three parallel lanes—Kuan Alley, Zhai Alley, and Jing Alley—offers a
                journey through time. Kuan Alley evokes the leisurely pace of historic Chengdu with its classic
                teahouses and taverns. Zhai Alley blends traditional courtyards with stylish bars and boutiques. Jing
                Alley brings modern Chengdu to life through lively nightlife and contemporary art displays.</li>
              <li>At People’s Park, experience the city’s famous “slow life” philosophy. Stroll among lush greenery, sip
                tea in traditional teahouses, watch locals play mahjong, or try your hand at calligraphy. This park has
                long been the heart of Chengdu’s daily life, offering a genuine glimpse into local culture.</li>
              <li>The day concludes with a culinary highlight at Shuyanfu Restaurant, where traditional Sichuan cuisine
                meets cultural performance. Savor authentic local dishes in a setting reminiscent of ancient royal
                banquets, creating a perfect harmony of taste and tradition.</li>
              <li>This tour is a complete Chengdu experience, blending cultural discovery and gastronomic delight in a
                single unforgettable day.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 12">
            <div class="paragraph">Spend a full day immersed in the spiritual beauty of Mount Emei, where nature and Zen
              traditions come
              together. Start your journey with a tour of ancient temples, wandering serene halls filled with
              centuries of wisdom and quiet reflection.</div>
            <div class="paragraph">Enjoy a wholesome vegetarian meal, embracing the monastic values of simplicity and
              gratitude, and
              savor every bite mindfully. Join guided meditation sessions led by experienced monks, exploring your
              inner calm and finding mental clarity amidst the tranquil surroundings.</div>
            <div class="paragraph">Experience the meditative art of copying sacred scriptures, a hands-on practice that
              deepens your
              connection to Zen teachings. As the day concludes, participate in the incense-burning ritual,
              symbolically purifying the mind and uplifting the spirit.</div>
            <div class="paragraph">This unique journey blends spiritual practice, cultural immersion, and natural
              beauty, offering a
              transformative experience that nurtures inner peace and a deeper appreciation for Zen traditions.</div>
          </div>
          <div v-if="tourInfo.id === 13">
            <ul>
              <li>Start your day early in Chengdu and head west into the soaring landscapes of the Qionglai Mountains.
                As the city slowly disappears behind you, the road winds through lush river valleys and forested hills,
                gradually climbing into the highlands where the colors and traditions of Tibetan culture begin to
                appear—prayer flags flutter in the wind, stone villages dot the slopes, and distant snow-capped peaks
                rise on the horizon.</li>
              <li>Your journey leads to Mount Siguniang, often called the “Queen of Sichuan’s Peaks”, where four
                towering summits dominate alpine meadows and glacial valleys. Spend the day discovering Shuangqiao
                Valley, the park’s most scenic and accessible area. Hop on an eco-friendly shuttle and traverse dramatic
                mountain scenery, pausing to admire turquoise rivers, icy waterfalls, dense spruce forests, and jagged
                peaks mirrored in serene highland lakes.</li>
              <li>Enjoy a simple local meal or packed picnic amid the breathtaking scenery, with the valley’s quiet and
                the crisp mountain air offering a refreshing break from the summer heat of the lowlands.</li>
              <li>In the afternoon, begin the return journey to Chengdu, winding down through steep river canyons and
                picturesque Tibetan-style villages. By evening, you’ll be back in the city, carrying with you the memory
                of Sichuan’s hidden natural wonders—all experienced in just a single day.</li>
            </ul>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Highlights" name="second">
          <!-- 所有 Highlights 内容完全保留（略，见你原文件） -->
          <!-- ... 你的原始内容 ... -->
          <div v-if="tourInfo.id === 1">
            <ul>
              <li><span class="bold-text">Panda Valley</span>
                <p> Discover China’s most beloved national treasure in one of
                  the world’s leading panda conservation sites.</p>
              </li>
              <li><span class="bold-text">Martial Arts & Tai Chi</span>
                <p>
                  Step into the legacy of Bruce Lee and Jackie Chan by learning authentic Tai Chi and traditional
                  martial
                  arts at the legendary Qingcheng Mountain, where these traditions have thrived for over two millennia.
                </p>
              </li>
              <li><span class="bold-text"> Yantianwo</span>
                <p>Admire the world’s largest panda sculpture, symbolizing
                  Chengdu’s deep bond with the panda.</p>
              </li>
              <li><span class="bold-text">Zhongshu Bookstore</span>
                <p> Recognized among the “Top 10 Most Beautiful
                  Bookstores in the World,” this is a cultural paradise for book lovers.</p>
              </li>
              <li><span class="bold-text"> Nanqiao Bridge</span>
                <p> Walk across an ancient bridge that carries centuries
                  of
                  Chengdu’s cultural heritage.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <ul>
              <li><span class="bold-text">Get Up Close with Pandas</span>
                <p> Step behind the scenes for an exclusive,
                  hands-on experience feeding and caring for giant pandas—a memory you won’t forget.</p>
              </li>
              <li><span class="bold-text">Discover Conservation Secrets</span>
                <p>
                  Gain insider knowledge on panda protection and the important work that keeps these iconic animals
                  safe.</p>
              </li>
              <li><span class="bold-text"> Earn Your Volunteer Certificate</span>
                <p>Celebrate your contribution with an
                  official certificate, marking your role in preserving one of China’s national treasures.</p>
              </li>
              <li><span class="bold-text">Stroll Through Kuan-Zhai Alleys–</span>
                <p> Immerse yourself in Chengdu’s living
                  history, exploring charming alleys filled with traditional architecture, artisan crafts, and the
                  irresistible flavors of Sichuan culture.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 3">
            <ul>
              <li><span class="bold-text">Architectural Discovery</span>
                <p>Learn about the unique buildings and history
                  of Ganbao Tibetan Village.</p>
              </li>
              <li><span class="bold-text">Authentic Cuisine </span>
                <p>
                  Savor a traditional Tibetan lunch with fresh, local ingredients.</p>
              </li>
              <li><span class="bold-text"> Butter Tea Workshop</span>
                <p> Try your hand at making this essential Tibetan
                  beverage.</p>
              </li>
              <li><span class="bold-text">Cultural Arts </span>
                <p> Optional sessions in Thangka painting, embroidery, and
                  paper-cutting.</p>
              </li>
              <li><span class="bold-text"> Dress & Celebrate </span>
                <p> Wear traditional Tibetan attire, enjoy a yak
                  hotpot, join the Guozhuang dance, and share in the warmth of a bonfire gathering.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 4">
            <ul>
              <li><span class="bold-text">Closest Alpine Escape from Chengdu</span>
                <p> Just two hours away, Xiling Snow
                  Mountain offers one of Sichuan’s most accessible snow resorts, blending year-round alpine scenery with
                  seasonal snowfields.</p>
              </li>
              <li><span class="bold-text">Riyueping (Sun & Moon Terrace) </span>
                <p>
                  A sweeping viewpoint where misty mornings and glowing sunsets frame the distant Daxuetang Peak and its
                  surrounding ridges.</p>
              </li>
              <li><span class="bold-text"> Daxuetang Peak</span>
                <p> Towering above 5,000 meters, this glacial giant
                  dominates the skyline, creating a breathtaking snowy backdrop.</p>
              </li>
              <li><span class="bold-text">Yingxue Square </span>
                <p>Encircled by fir trees and easy pathways, it’s the
                  perfect spot for gentle strolls, crisp mountain air, and memorable photos.</p>
              </li>
              <li><span class="bold-text">Snow & Ski Recreation Area </span>
                <p> From sledding and tubing to skiing and
                  snowmobiling, this family-friendly zone guarantees winter fun for visitors of all ages.</p>
              </li>
              <li><span class="bold-text">Forest Trails in Winter </span>
                <p> Wander through quiet alpine woods draped in
                  snow, with frozen streams and untouched powder amplifying the serene beauty.</p>
              </li>
              <li><span class="bold-text">Golden Sunset at Riyueping </span>
                <p> When conditions are right, the snowfields
                  reflect a radiant golden glow as the sun sets over drifting clouds and faraway peaks.</p>
              </li>
              <li><span class="bold-text">Easy Day Trip Accessa </span>
                <p> A simple round-trip drive from Chengdu makes
                  this one of the most convenient ways to enjoy snow without needing an overnight stay.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 5">
            <ul>
              <li><span class="bold-text">Ultimate Exploration</span>
                <p>Make the most of your day by visiting Sichuan’s
                  top two attractions in one journey.</p>
              </li>
              <li><span class="bold-text">Panda Encounters </span>
                <p>
                  Get up close with playful pandas and learn about efforts to protect these beloved animals.</p>
              </li>
              <li><span class="bold-text"> Historic Marvel</span>
                <p> Stand in awe of the Leshan Giant Buddha and explore
                  its rich cultural and spiritual legacy.</p>
              </li>
              <li><span class="bold-text">Perfectly Paced</span>
                <p> A well-structured itinerary that blends natural
                  wonders with cultural heritage in a single day</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 6">
            <ul>
              <li><span class="bold-text">Ultimate Exploration</span>
                <p>Make the most of your day by visiting Sichuan’s
                  top two attractions in one journey.</p>
              </li>
              <li><span class="bold-text">Panda Encounters </span>
                <p>
                  Get up close with playful pandas and learn about efforts to protect these beloved animals.</p>
              </li>
              <li><span class="bold-text"> Historic Marvel</span>
                <p> Stand in awe of the Leshan Giant Buddha and explore
                  its rich cultural and spiritual legacy.</p>
              </li>
              <li><span class="bold-text">Perfectly Paced</span>
                <p>A well-structured itinerary that blends natural
                  wonders with cultural heritage in a single day.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 7">
            <ul>
              <li><span class="bold-text">Observe giant pandas up close</span>
                <p>as they roam their semi-wild habitat at
                  Wolong Panda Base.</p>
              </li>
              <li><span class="bold-text">Be mesmerized by the magical Blue Tears</span>
                <p>at Yantianwo Bridge, a rare
                  nighttime natural spectacle.</p>
              </li>
              <li><span class="bold-text"> Snap photos with the world’s largest panda sculpture</span>
                <p>at Yantianwo, a
                  true symbol of Chengdu’s playful charm.</p>
              </li>
              <li><span class="bold-text">Step back in time at Nanqiao Bridge</span>
                <p> a historic landmark that reflects
                  centuries of Chengdu’s cultural heritage.</p>
              </li>
              <li><span class="bold-text">Wander through the stunning Zhongshu Bookstore</span>
                <p> an architectural gem
                  and one of the world’s most beautiful bookstores.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 8">
            <ul>
              <li><span class="bold-text">Roots of Taoism</span>
                <p> Journey to Mount Qingcheng, where Taoism first
                  flourished, rich in history and legend.</p>
              </li>
              <li><span class="bold-text">Scenic Hike</span>
                <p> Trek along forested paths on a gentle 1,600-meter ascent,
                  ideal for nature lovers.</p>
              </li>
              <li><span class="bold-text">Close Panda Encounters</span>
                <p> Witness giant pandas in a setting that mirrors
                  their natural wilderness.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 9">
            <ul>
              <li><span class="bold-text">Immerse in Emei's Ancient Wilderness</span>
                <p> Step into lush, age-old forests
                  alive with diverse flora and vibrant wildlife.</p>
              </li>
              <li><span class="bold-text">Feel the Pulse of Sacred Monasteries</span>
                <p> Wander through historic temples
                  where centuries-old Buddhist chants create a serene atmosphere.</p>
              </li>
              <li><span class="bold-text">Marvel at the Golden Summit</span>
                <p> Stand in awe before the gleaming gilded
                  temples crowning Mount Emei, especially breathtaking at sunrise or sunset.</p>
              </li>
              <li><span class="bold-text">Stroll Huanglongxi's Tranquil Waterways</span>
                <p> Meander along calm rivers
                  flanked by traditional Sichuanese architecture, and soak in the timeless charm of this ancient town.
                </p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 10">
            <ul>
              <li><span class="bold-text">Mountain Escape:</span>
                <p>Leave the bustle of the city behind and ascend quickly
                  into breathtaking alpine scenery.</p>
              </li>
              <li><span class="bold-text">Four Seasons of Beauty:</span>
                <p>From spring blossoms to summer forests, autumn
                  gold, and winter snow, nature transforms the valley year-round.</p>
              </li>
              <li><span class="bold-text"> Tibetan Heartbeat:</span>
                <p>Step into authentic Tibetan villages, discover
                  monasteries, and feel the rhythm of local traditions.</p>
              </li>
              <li><span class="bold-text">Nature & Adventure:</span>
                <p>Wander through untouched landscapes,embrace winter
                  fun in the snow.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 11">
            <ul>
              <li><span class="bold-text">Kuanzhai Alley:</span>
                <p>Wander through historic lanes, visit traditional
                  teahouses, and discover vibrant local shops.</p>
              </li>
              <li><span class="bold-text">People's Park:</span>
                <p> Immerse yourself in authentic Chengdu life, sipping tea,
                  playing mahjong, or practicing calligraphy alongside locals.</p>
              </li>
              <li><span class="bold-text"> Shuyanfu Dinner: </span>
                <p>Savor a royal-style banquet featuring classic Sichuan
                  cuisine.</p>
              </li>
              <li><span class="bold-text"> Cultural Performances: </span>
                <p>Be captivated by dazzling face-changing shows
                  and thrilling fire-breathing acts.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 12">
            <ul>
              <li><span class="bold-text">Temple Discovery:</span>
                <p>Step into ancient sacred halls and feel the echoes of
                  centuries of spiritual wisdom.</p>
              </li>
              <li><span class="bold-text">Mindful Feast: </span>
                <p> Enjoy a vegetarian meal with full awareness, embracing
                  the simplicity and gratitude of monastic life.</p>
              </li>
              <li><span class="bold-text">Meditation Guidance: </span>
                <p>Journey inward with the support of experienced
                  monks, finding clarity and calm beyond everyday distractions.</p>
              </li>
              <li><span class="bold-text">Sacred Script Practice: </span>
                <p>Engage in the meditative art of copying
                  scriptures, deepening your connection to Zen teachings.</p>
              </li>
              <li><span class="bold-text">Incense Ritual: </span>
                <p>Purify your mind and uplift your spirit through the
                  timeless practice of incense burning.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 13">
            <ul>
              <li><span class="bold-text">Scenic Mountain Escape: </span>
                <p>Just two hours from Chengdu, travel into the
                  soaring landscapes of the Qionglai Mountains.</p>
              </li>
              <li><span class="bold-text">Majestic Peaks: </span>
                <p>Admire Mount Siguniang, the “Queen of Sichuan’s
                  Peaks,” with four towering summits above alpine meadows.</p>
              </li>
              <li><span class="bold-text">Shuangqiao Valley Wonders: </span>
                <p>Explore turquoise rivers, icy waterfalls,
                  dense spruce forests, and jagged peaks reflected in serene lakes.</p>
              </li>
              <li><span class="bold-text">Day-Trip Convenience: </span>
                <p>Experience Sichuan’s hidden natural beauty—all in
                  a single day from Chengdu.</p>
              </li>
            </ul>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Itinerary" name="third">
          <!-- 所有 Itinerary 内容完全保留（略） -->
          <!-- ... 你的原始内容 ... -->
          <div v-if="tourInfo.id === 1">
            <ul>
              <li><span class="bold-text"> 08:30 AM</span>
                <p> Hotel pick-up and departure</p>
              </li>
              <li><span class="bold-text">10:00 – 12:00 PM</span>
                <p>Explore Panda Valley and observe giant pandas</p>
              </li>
              <li><span class="bold-text">12:30 – 01:30 PM</span>
                <p>lunch</p>
              </li>
              <li><span class="bold-text">02:00 – 03:30 PM</span>
                <p>Take part in a Kung Fu or Tai Chi lesson guided by
                  professional masters</p>
              </li>
              <li><span class="bold-text">04:00 – 04:30 PM</span>
                <p> Visit the famous Zhongshu Bookstore</p>
              </li>
              <li><span class="bold-text">05:00 – 06:00 PM</span>
                <p> Discover Yantianwo Square and stroll across the
                  historic Nanqiao Bridge</p>
              </li>
              <li><span class="bold-text">07:30 PM</span>
                <p> Return to hotel</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <ul>
              <li><span class="bold-text"> 07:30 / 8:00 AM</span>
                <p>Hotel pick-up and start your Chengdu adventure.</p>
              </li>
              <li><span class="bold-text">09:00 AM – 03:00 PM</span>
                <p>Hands-on Panda Volunteer Experience – feed, care
                  for, and interact with giant pandas, earning your official volunteer certificate.
                </p>
              </li>
              <li><span class="bold-text">03:00 PM – 04:00 PM</span>
                <p>Transfer to Kuan-Zhai Alleys, enjoying a scenic
                  drive through Chengdu.</p>
              </li>
              <li><span class="bold-text">04:00 PM – 05:30 PM</span>
                <p>Explore Kuan-Zhai Alleys – wander the historic
                  lanes, admire traditional architecture, shop for local crafts, and savor the flavors of Sichuan.</p>
              </li>
              <li><span class="bold-text">06:00 PM</span>
                <p>Return to your hotel, concluding a full day of wildlife and
                  cultural experiences.
                </p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 3">
            <ul>
              <li><span class="bold-text"> 08:30 AM</span>
                <p>Pick-up from your hotel and start your Tibetan adventure.
                </p>
              </li>
              <li><span class="bold-text">11:00 AM – 12:00 PM</span>
                <p>Explore Ganbao Valley, discovering the village’s
                  culture, architecture, and scenic charm.
                </p>
              </li>
              <li><span class="bold-text">12:00 PM </span>
                <p>Enjoy an authentic Tibetan lunch, savoring traditional
                  flavors made with local ingredients.</p>
              </li>
              <li><span class="bold-text">02:00 PM – 04:00 PM</span>
                <p>Participate in optional cultural activities,
                  including Thangka painting, embroidery, or paper-cutting, to experience Tibetan artistry firsthand.
                </p>
              </li>
              <li><span class="bold-text">04:00 PM – 05:00 PM</span>
                <p>Dress in traditional Tibetan attire for a memorable
                  photo session capturing the essence of local culture.
                </p>
              </li>
              <li><span class="bold-text"> 05:00 PM – 07:00 PM</span>
                <p>Enjoy a yak hotpot dinner and join a Guozhuang
                  dance around a lively bonfire, celebrating Tibetan hospitality and community spirit.</p>
              </li>
              <li><span class="bold-text"> 09:30 PM</span>
                <p>Return to your hotel, concluding a full day of unforgettable
                  Tibetan experiences.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 4">
            <ul>
              <li><span class="bold-text"> Morning </span>
                <p>Drive to Xiling Snow Mountain.</p>
              </li>
              <li><span class="bold-text">Daytime </span>
                <p>Explore Xiling: snow play, scenic views, and activities.
                </p>
              </li>
              <li><span class="bold-text">Evening </span>
                <p>Return to Chengdu.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 5">
            <ul>
              <li><span class="bold-text"> 7:50 AM </span>
                <p>Pick up from hotel and start your adventure.</p>
              </li>
              <li><span class="bold-text">8:30 AM – 10:50 AM </span>
                <p>Explore the Chengdu Research Base of Giant Panda
                  Breeding, getting up close with playful pandas.
                </p>
              </li>
              <li><span class="bold-text">10:50 AM – 12:50 PM </span>
                <p>Scenic drive to Leshan with a stop for lunch along
                  the way.</p>
              </li>
              <li><span class="bold-text"> 1:50 PM – 3:50 PM </span>
                <p>Marvel at the Leshan Giant Buddha, the world’s
                  largest stone-carved Buddha.</p>
              </li>
              <li><span class="bold-text"> 6:00 PM </span>
                <p>Return to your hotel, concluding a day filled with wildlife
                  and cultural wonders.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 6">
            <ul>
              <li><span class="bold-text"> 7:00 AM </span>
                <p>Hotel pick-up.</p>
              </li>
              <li><span class="bold-text">9:40 AM – 12:40 PM </span>
                <p>Explore Bifengxia Panda Base, observing giant
                  pandas in their natural habitat.
                </p>
              </li>
              <li><span class="bold-text">1:40 PM </span>
                <p>Lunch break.</p>
              </li>
              <li><span class="bold-text"> 2:40 PM – 4:40 PM </span>
                <p>Hands-on tea experience: pick fresh tea leaves and
                  learn traditional tea-making techniques on Mengding Mountain.</p>
              </li>
              <li><span class="bold-text"> 6:40 PM</span>
                <p>Return to hotel.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 7">
            <ul>
              <li><span class="bold-text"> 7:00 AM </span>
                <p>Hotel pick-up.</p>
              </li>
              <li><span class="bold-text">9:40 AM – 12:40 PM </span>
                <p>Explore Bifengxia Panda Base, observing pandas in
                  their natural, semi-wild habitat.
                </p>
              </li>
              <li><span class="bold-text">1:40 PM </span>
                <p>Lunch break.</p>
              </li>
              <li><span class="bold-text"> 2:40 PM – 4:40 PM </span>
                <p>Participate in tea picking and traditional tea
                  crafting at Mengding Mountain.</p>
              </li>
              <li><span class="bold-text"> 6:40 PM</span>
                <p>Return to hotel.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 8">
            <ul>
              <li><span class="bold-text">8:00 AM</span>
                <p> Pick up from your hotel and start your day of adventure</p>
              </li>
              <li><span class="bold-text">9:30 AM – 11:30 AM</span>
                <p> Explore Panda Valley, observing pandas in a
                  naturalistic habitat and capturing their playful moments</p>
              </li>
              <li><span class="bold-text">12:30 PM</span>
                <p> Enjoy a relaxing lunch break, refueling for the afternoon's
                  journey</p>
              </li>
              <li><span class="bold-text">1:30 PM – 4:30 PM</span>
                <p>Hike through Mount Qingcheng, wandering scenic
                  trails, ancient temples, and serene spots that reveal the heart of Taoist culture</p>
              </li>
              <li><span class="bold-text">5:30 PM</span>
                <p> Return to your hotel, concluding a day of wildlife wonders
                  and spiritual discovery</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 9">
            <ul>
              <li><span class="bold-text">7:50 AM – Hotel Pickup</span>
                <p> Begin your day with a comfortable pickup from
                  your hotel, ready for a scenic adventure.</p>
              </li>
              <li><span class="bold-text">10:00 AM – 12:00 PM – Explore Mount Emei</span>
                <p> Wander through ancient
                  forests and discover breathtaking landscapes, soaking in the spiritual aura of this UNESCO World
                  Heritage site.</p>
              </li>
              <li><span class="bold-text">1:00 PM – Lunch Break</span>
                <p></p>
              </li> <!-- 注意这里，如果内容为空，P标签可能不渲染 -->
              <li><span class="bold-text">2:00 PM – 4:00 PM – Visit Huanglongxi Ancient Town</span>
                <p> Stroll along
                  tranquil rivers, cross stone bridges, and admire traditional Sichuanese architecture, stepping back
                  into
                  a historic waterside settlement.</p>
              </li>
              <li><span class="bold-text">5:00 PM – Return to Hotel</span>
                <p> Conclude your day with a comfortable ride
                  back to your hotel, carrying memories of nature, culture, and heritage.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 10">
            <ul>
              <li><span class="bold-text">7:00 AM</span>
                <p> Depart from your hotel and begin the scenic drive toward
                  Bipenggou.</p>
              </li>
              <li><span class="bold-text">10:40 AM – 2:40 PM</span>
                <p> Explore the stunning landscapes of Bipenggou
                  Valley. Walk along alpine trails, enjoy the panoramic views of snow-capped peaks.</p>
              </li>
              <li><span class="bold-text">2:40 PM</span>
                <p> Pause for lunch with refreshing mountain air and surrounding
                  natural beauty.</p>
              </li>
              <li><span class="bold-text">3:10 PM – 6:10 PM</span>
                <p> Return drive to Chengdu, taking in the peaceful
                  countryside along the way.</p>
              </li>
              <li><span class="bold-text">6:10 PM </span>
                <p> Arrive back at your hotel, concluding a full day of
                  discovery.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 11">
            <ul>
              <li><span class="bold-text">9:00 AM </span>
                <p>Hotel Pick-Up:Begin your cultural journey with a comfortable
                  transfer from your hotel.</p>
              </li>
              <li><span class="bold-text">9:30 AM – 12:00 PM </span>
                <p>Explore Kuanzhai Alley:Wander through the
                  historic lanes, sip tea in traditional teahouses, and browse vibrant shops blending old-world charm
                  with
                  modern flair.</p>
              </li>
              <li><span class="bold-text">12:30 PM </span>
                <p>Lunch Break:Enjoy a relaxed meal at your leisure.</p>
              </li>
              <li><span class="bold-text">1:30 PM – 4:30 PM  </span>
                <p>Discover People's Park:Immerse yourself in local
                  life—watch tea-drinking rituals, join a game of mahjong.</p>
              </li>
              <li><span class="bold-text">6:00 PM  </span>
                <p>Shuyanfu Dining Experience:Savor a royal-style Sichuan
                  banquet complemented by mesmerizing cultural performances</p>
              </li>
              <li><span class="bold-text">8:30 PM  </span>
                <p>Return to Hotel:Conclude your day of cultural immersion and
                  culinary delight with a comfortable transfer back.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 12">
            <ul>
              <li><span class="bold-text">7:30 AM </span>
                <p> Pick up from your hotel and begin your journey to Mount Emei.
                </p>
              </li>
              <li><span class="bold-text">9:30 AM</span>
                <p> Arrive at the majestic Mount Emei, ready for a day of Zen
                  immersion.</p>
              </li>
              <li><span class="bold-text">10:00 AM – 4:30 PM</span>
                <p> Participate in Zen practices, including temple
                  exploration, meditation, scripture copying, and mindful rituals.</p>
              </li>
              <li><span class="bold-text">6:30 PM</span>
                <p> Return to your hotel, concluding a day of spiritual reflection
                  and inner calm.</p>
              </li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 13">
            <div><span class="bold-text">Morning – Departure from Chengdu </span></div>
            <div>
              <p>Begin your day early, driving west along the Dujiangyan–Wenchuan Expressway. Pass through the towns of
                Yingxiu and Wolong, then cross the Balang Mountain Tunnel to gradually enter the Tibetan Plateau region.
                Upon reaching the Mount Siguniang Scenic Area, hop on an eco-shuttle to explore Shuangqiao Valley, the
                park’s most accessible and picturesque route. Enjoy a day surrounded by towering snow-capped peaks, lush
                forests, tranquil lakes, and alpine meadows.</p>
            </div>
            <div><span class="bold-text">Daytime – Exploring Siguniang Mountain</span></div>
            <ul>
              <li>
                <p>The Four Sisters Peaks dominate the skyline, with Yaomei Peak reaching 6,250 meters. Often shrouded
                  in
                  clouds or snow, these majestic summits are nicknamed the “Alps of the East” and create one of
                  Sichuan’s
                  most iconic alpine vistas.</p>
              </li>
              <li>
                <p>Shuangqiao Valley stretches over 35 kilometers, with its eco-shuttle route meandering along glacial
                  rivers and alpine terrain—perfect for nature photography or leisurely strolls through conifer forests
                  and valleys.</p>
              </li>
              <li>
                <p>Niupengzi Meadow opens wide under distant peaks, where yaks graze quietly on the grasslands. Crisp
                  blue skies and snowy mountains frame the scene, capturing the essence of Tibetan pastoral life.</p>
              </li>
              <li>
                <p>Deeper into the valley, Mount Buda La rises sharply like a fortress, adding a dramatic, mysterious
                  touch. Nearby, Sun & Moon Mirror Mountain gleams under sunlight, its cliff face reflecting the light
                  like a natural mirror—an unforgettable, surreal sight.</p>
              </li>
              <li>
                <p>Wander through the Red Spruce Forest, which transforms with the seasons—fiery red in autumn,
                  snow-covered in winter—offering a serene escape. Along the route, alpine lakes such as Haizi Lake
                  perfectly mirror the peaks and sky, creating one of the valley’s most tranquil and beautiful corners.
                </p>
              </li>
            </ul>
            <div><span class="bold-text">Evening – Return to Chengdu </span></div>
            <div>
              <p>In the late afternoon, drive back to Chengdu, concluding a day immersed in snowy horizons, alpine
                forests, and highland serenity in western Sichuan.</p>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="What’s included" name="fourth">
          <!-- 所有 Included 内容完全保留 -->
          <!-- ... 你的原始内容 ... -->
          <div v-if="tourInfo.id === 1">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Participation in Tai Chi & Martial Arts training sessions </li>
              <li>Professional tour guide services</li>
              <li>All required transportation during the tour</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Entrance ticket to Panda Valley</li>
              <li>Personal expenses, such as shopping or additional activities</li>
              <li>Tips for guides and drivers</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 2">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Comfortable transportation throughout the tour </li>
              <li>Services of a professional tour guide</li>
              <li>Service fees</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals</li>
              <li>Optional activities</li>
              <li>Personal expenses, such as shopping</li>
              <li>Tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 3">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Meals as part of the day’s itinerary </li>
              <li>Professional tour guide to lead and explain your experiences</li>
              <li>Service fees</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Transportation</li>
              <li>Optional activities or workshops beyond the main itinerary</li>
              <li>Personal expenses, such as shopping or souvenirs</li>
              <li>Tips for guides or staff</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 4">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Private vehicle transfers for the entire trip </li>
              <li>Bilingual driver-guide service (English-speaking)</li>
              <li>All applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals and beverages</li>
              <li>Admission tickets to scenic attractions</li>
              <li>Cable car and shuttle bus fares inside the scenic area</li>
              <li>International airfare and visa fees</li>
              <li>Personal expenses (shopping, extra activities, etc.)</li>
              <li>Tips for driver/guide</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 5">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Round-trip transportation </li>
              <li>Entrance tickets to attractions</li>
              <li>Professional tour guide</li>
              <li>Service fees</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals and drinks</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses (e.g., shopping, souvenirs)</li>
              <li>Gratuities/tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 6">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Transfers and transportation </li>
              <li>Professional tour guide</li>
              <li>Service charges</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals and drinks</li>
              <li>Optional excursions or activities</li>
              <li>Personal expenses (such as souvenirs or shopping)</li>
              <li>Gratuities/tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 7">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Visit to Zhongshu Bookstore</li>
              <li>Visit to Nanqiao (South) Bridge</li>
              <li>Visit to Yantianwo Plaza</li>
              <li>Professional guide service</li>
              <li>Private car transfer between hotel and attractions</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses such as shopping</li>
              <li>tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 8">
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
          <div v-if="tourInfo.id === 9">
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
          <div v-if="tourInfo.id === 10">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Private transportation throughout the trip</li>
              <li>Professional English-speaking tour guide</li>
              <li>Taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals and beverages</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses, including shopping</li>
              <li>Tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 11">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li><span class="bold-text">Private Transportation:</span>Comfortable travel throughout the day.</li>
              <li><span class="bold-text">Professional Tour Guide:</span>Knowledgeable guide to enrich your experience.
              </li>
              <li><span class="bold-text">Taxes</span></li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li><span class="bold-text">Meals: </span>Enjoy lunch and other personal dining choices on your own.</li>
              <li><span class="bold-text">Optional Programs</span></li>
              <li><span class="bold-text">Personal Expenses:</span>Shopping, souvenirs, and other personal costs.</li>
              <li><span class="bold-text">Tips</span></li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 12">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Meals during the tour.</li>
              <li>Transportation between destinations</li>
              <li>Professional tour guide services</li>
              <li>Service fees</li>
              <li>Applicable taxes</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Optional activities</li>
              <li>Personal expenses, such as shopping</li>
              <li>Gratuities / tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 13">
            <p style="margin-top: 2%;"><span class="bold-text">Includes</span></p>
            <ul>
              <li>Private car transfer for the entire trip</li>
              <li>Professional English-speaking driver and guide service</li>
              <li>All applicable taxes and service fees</li>
            </ul>
            <p style="margin-top: 2%;"><span class="bold-text">Excludes</span></p>
            <ul>
              <li>Meals not specified in the itinerary</li>
              <li>Entrance tickets to scenic areas</li>
              <li>Cable car and eco-shuttle bus tickets</li>
              <li>International flights and visa fees</li>
              <li>Personal expenses such as shopping or extra activities</li>
              <li>Gratuities for the guide and driver</li>
            </ul>
          </div>
        </el-tab-pane>

        <el-tab-pane label="Important info" name="five">
          <!-- 重要信息完全保留 -->
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

    <!-- 其他推荐 -->
    <OtherCd :exclude-id="tourInfo.id" />

    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
// 保留你原有的所有 import 和 script 逻辑（完全不变）
import Header from "@/components/Header.vue";
import OtherCd from "@/components/OtherCd.vue";
import Footer from "@/components/Footer.vue";
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
// Tour 4 images
import img4_1 from '@/assets/cd/cd4-1.jpg';
import img4_2 from '@/assets/cd/cd4-2.jpg';
import img4_3 from '@/assets/cd/cd4-3.jpg';
import img4_4 from '@/assets/cd/cd4-4.jpg';
import img4_5 from '@/assets/cd/cd4-5.jpg';
import img4_6 from '@/assets/cd/cd4-6.jpg';
import img4_7 from '@/assets/cd/cd4-7.jpg';
import img4_8 from '@/assets/cd/cd4-8.jpg';
// Tour 5images
import img5_1 from '@/assets/cd/cd5-1.jpg';
import img5_2 from '@/assets/cd/cd5-2.jpg';
import img5_3 from '@/assets/cd/cd5-3.jpg';
import img5_4 from '@/assets/cd/cd5-4.jpg';
import img5_5 from '@/assets/cd/cd5-5.jpg';
import img5_6 from '@/assets/cd/cd5-6.jpg';
import img5_7 from '@/assets/cd/cd5-7.jpg';
import img5_8 from '@/assets/cd/cd5-8.jpg';
// Tour 6 images
import img6_1 from '@/assets/cd/cd6-1.png';
import img6_2 from '@/assets/cd/cd6-2.jpg';
import img6_3 from '@/assets/cd/cd6-3.jpg';
import img6_4 from '@/assets/cd/cd6-4.jpg';
import img6_5 from '@/assets/cd/cd6-5.jpg';
import img6_6 from '@/assets/cd/cd6-6.jpg';
import img6_7 from '@/assets/cd/cd6-7.jpg';
import img6_8 from '@/assets/cd/cd6-8.jpg';
// Tour 7 images
import img7_1 from '@/assets/cd/cd7-1.jpg';
import img7_2 from '@/assets/cd/cd7-2.jpg';
import img7_3 from '@/assets/cd/cd7-3.jpg';
import img7_4 from '@/assets/cd/cd7-4.jpg';
import img7_5 from '@/assets/cd/cd7-5.jpg';
import img7_6 from '@/assets/cd/cd7-6.jpg';
// Tour8 images
import cdimg1 from '@/assets/sichuan/1.jpg';
import cdimg2 from '@/assets/sichuan/2.jpg';
import cdimg3 from '@/assets/sichuan/3.jpg';
import cdimg4 from '@/assets/sichuan/4.jpg';
import cdimg6 from '@/assets/sichuan/6.jpg';
import cdimg7 from '@/assets/sichuan/7.jpg';
import cdimg8 from '@/assets/sichuan/8.jpg';
// Tour9 images
import em1 from '@/assets/sichuan/em1.jpg';
import em2 from '@/assets/sichuan/em2.jpg';
import em3 from '@/assets/sichuan/em3.jpg';
import em5 from '@/assets/sichuan/em5.jpg';
import em4 from '@/assets/sichuan/em4.jpg';
import em6 from '@/assets/sichuan/em6.jpg';
import em7 from '@/assets/sichuan/em7.jpg';
import em8 from '@/assets/sichuan/em8.jpg';
// Tour 10 images
import img10_1 from '@/assets/cd/cd10-1.jpg';
import img10_2 from '@/assets/cd/cd10-2.jpg';
import img10_3 from '@/assets/cd/cd10-3.jpg';
import img10_4 from '@/assets/cd/cd10-4.jpg';
import img10_5 from '@/assets/cd/cd10-5.jpg';
import img10_6 from '@/assets/cd/cd10-6.jpg';
import img10_7 from '@/assets/cd/cd10-7.jpg';
import img10_8 from '@/assets/cd/cd10-8.jpg';
// Tour 11 images
import img11_1 from '@/assets/cd/cd11-1.jpg';
import img11_2 from '@/assets/cd/cd11-2.jpg';
import img11_3 from '@/assets/cd/cd11-3.jpg';
import img11_4 from '@/assets/cd/cd11-4.jpg';
import img11_5 from '@/assets/cd/cd11-5.jpg';
import img11_6 from '@/assets/cd/cd11-6.jpg';
import img11_7 from '@/assets/cd/cd11-7.jpg';
import img11_8 from '@/assets/cd/cd11-8.jpg';
// Tour 12 images
import img12_1 from '@/assets/cd/cd12-1.jpg';
import img12_2 from '@/assets/cd/cd12-2.jpg';
import img12_3 from '@/assets/cd/cd12-3.jpg';
import img12_4 from '@/assets/cd/cd12-4.jpg';
import img12_5 from '@/assets/cd/cd12-5.jpg';
import img12_6 from '@/assets/cd/cd12-6.jpg';
import img12_7 from '@/assets/cd/cd12-7.jpg';
import img12_8 from '@/assets/cd/cd12-8.jpg';
// Tour 13 images
import img13_1 from '@/assets/cd/cd13-1.jpg';
import img13_2 from '@/assets/cd/cd13-2.jpg';
import img13_3 from '@/assets/cd/cd13-3.jpg';
import img13_4 from '@/assets/cd/cd13-4.jpg';
import img13_5 from '@/assets/cd/cd13-5.jpg';
import img13_6 from '@/assets/cd/cd13-6.jpg';
import img13_7 from '@/assets/cd/cd13-7.jpg';
import img13_8 from '@/assets/cd/cd13-8.jpg';
export default {
  name: "Detail",
  components: {
    Header,
    OtherCd,
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
        this.tourInfo.title = "Chengdu: Home of Kung Fu Panda — Pandas, Martial Arts & Tai Chi Wonders";
        this.tourInfo.adultPrice = 255;
      } else if (id === 2) {
        this.images = [img9, img10, img11, img12, img13, img14, img15, img16];
        this.tourInfo.title = "Panda Volunteer Experience & Kuanzhai Alley Exploration";
        this.tourInfo.adultPrice = 255;
      } else if (id === 3) {
        this.images = [img17, img18, img19, img20, img21, img22, img23, img24];
        this.tourInfo.title = "Chengdu to Tibetan Village: Experience a Day in Tibetan Life";
        this.tourInfo.adultPrice = 215;
      } else if (id === 4) {
        this.images = [img4_1, img4_2, img4_3, img4_4, img4_5, img4_6, img4_7, img4_8];
        this.tourInfo.title = "Xiling Snow Mountain: Day Tour of Adventure and Beauty ";
        this.tourInfo.adultPrice = 109;
      } else if (id === 5) {
        this.images = [img5_1, img5_2, img5_3, img5_4, img5_5, img5_6, img5_7, img5_8];
        this.tourInfo.title = "Leshan Giant Buddha & Pandas: A Day of Wonder";
        this.tourInfo.adultPrice = 165;
      } else if (id === 6) {
        this.images = [img6_1, img6_2, img6_3, img6_4, img6_5, img6_6, img6_7, img6_8];
        this.tourInfo.title = "Tea Picking & Panda Encounters in the Unspoiled";
        this.tourInfo.adultPrice = 155;
      }
      else if (id === 7) {
        this.images = [img7_1, img7_2, img7_3, img7_4, img7_5, img7_6,];
        this.tourInfo.title = "Discover Wolong, Blue Tears & Zhongshu: Chengdu’s Secret Gems";
        this.tourInfo.adultPrice = 145;
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
      } else if (id === 10) {
        this.images = [img10_1, img10_2, img10_3, img10_4, img10_5, img10_6, img10_7, img10_8,];
        this.tourInfo.title = "Discover the Snowy Magic of Bipenggou in One Day";
        this.tourInfo.adultPrice = 125;
      } else if (id === 11) {
        this.images = [img11_1, img11_2, img11_3, img11_4, img11_5, img11_6, img11_7, img11_8,];
        this.tourInfo.title = "Chengdu: A Journey Through Culture & Tradition";
        this.tourInfo.adultPrice = 295;
      }
      else if (id === 12) {
        this.images = [img12_1, img12_2, img12_3, img12_4, img12_5, img12_6, img12_7, img12_8,];
        this.tourInfo.title = "Zen Escape: A Journey into Mindful Serenity";
        this.tourInfo.adultPrice = 155;
      } else if (id === 13) {
        this.images = [img13_1, img13_2, img13_3, img13_4, img13_5, img13_6, img13_7, img13_8,];
        this.tourInfo.title = "Discover Siguniang Mountain: One-Day Adventure";
        this.tourInfo.adultPrice = 109;
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