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
          <div v-if="tourInfo.id === 4">
           <ul>
            <li>Just a two-hour drive from Chengdu, Xiling Snow Mountain invites travelers into a winter wonderland of snowy peaks, whispering forests, and crisp alpine air. In a single day, you can leave the city behind and step into a landscape carved by glaciers, mist, and sunlight.</li>
            <li>The journey begins with a scenic ride through the western hills, arriving at one of Sichuan’s most beloved snow destinations. A cable car ascends above the treetops, opening up views of endless snowfields and sweeping panoramas.</li>
            <li>At Riyueping, the mountaintop stretches out like a frozen theater—Daxuetang Peak rises in the distance, sunlight sparkles on freshly fallen snow, and the only sound is the crunch of boots on powder. In winter, the area transforms into a living snow globe, offering breathtaking vistas across clouds and distant ridges.</li>
            <li>Whether wandering through snow-covered pine forests or enjoying sleds and skis, Xiling Snow Mountain welcomes anyone seeking the magic of the mountains without a long journey. As the sun dips, the snow glows golden, the air turns crisp, and the mountains leave a lasting impression—proof that nature’s beauty doesn’t need days to be unforgettable.</li>
            <li>Xiling Snow Mountain isn’t just a day trip; it’s a brief retreat into a world of snow, wonder, and alpine charm.</li>
           </ul>

          </div>
          <div v-if="tourInfo.id === 5">
           <ul>
            <li>Explore Sichuan: Pandas, Culture & Heritage</li>
            <li>Embark on a full-day adventure through the natural and cultural wonders of Sichuan. Begin with a close encounter with giant pandas, watching them play, munch bamboo, and roam freely in habitats designed to mimic their natural home. Then, travel to the UNESCO World Heritage Site of Leshan to marvel at the world’s largest stone Buddha, standing 71 meters tall and overlooking the rivers for over 1,200 years—a true symbol of peace and spiritual wisdom.</li>
            <li>This journey blends wildlife encounters with cultural exploration, offering an unforgettable experience of China’s breathtaking landscapes and rich heritage that will stay with you long after the day ends.</li>
           </ul>

          </div>
          <div v-if="tourInfo.id === 6">
           <ul>
            <li>Discover Sichuan: Pandas, Tea & Scenic Wonders</li>
            <li>Embark on a full-day adventure through Sichuan’s ecological and cultural treasures. Begin at Bifengxia, a lush sanctuary for endangered giant pandas. Watch these adorable creatures up close in their natural habitat, surrounded by dense forests, cascading waterfalls, and vibrant biodiversity. Along the way, learn about global conservation efforts and deepen your appreciation for nature’s delicate balance.</li>
            <li>Next, head to Mengding Mountain, the cradle of China’s tea culture. Wander through ancient tea terraces that stretch across the hills, offering stunning panoramic views. Try your hand at traditional tea picking and discover the art of tea crafting, connecting with centuries of cultural heritage. The serene landscapes and fragrant tea fields create the perfect setting to relax, rejuvenate, and immerse yourself in local traditions.</li>
            <li>This immersive tour blends wildlife encounters, breathtaking scenery, and cultural experiences, promising an unforgettable journey into the heart of Sichuan’s natural and historical wonders.</li>
           </ul>

          </div>
          <div v-if="tourInfo.id === 7">
            <ul>
            <li>Experience the best of Chengdu in one captivating day, blending wildlife, culture, and history. Start at Wolong Panda Base, a world-renowned sanctuary where giant pandas roam in semi-natural habitats. Join a morning feeding session for a close-up encounter with these beloved creatures while gaining insight into pioneering conservation efforts.</li>
            <li>Explore Yantianwo, home to the world’s largest panda sculpture, an artistic marvel perfect for photos and a playful glimpse into Chengdu’s creative spirit.</li>
            <li>Continue to Nanqiao, an ancient bridge steeped in history and famed for the enchanting “Blue Tears” phenomenon, when bioluminescent organisms illuminate the waters at night, creating a truly magical scene. This historic landmark has quietly witnessed centuries of Chengdu’s evolving culture.</li>
            <li>Wrap up your journey at the Zhongshu Bookstore, celebrated as one of the “Top 10 Most Beautiful Bookstores in the World.” Its stunning architecture and serene atmosphere offer a peaceful retreat, merging tradition and modernity in a literary haven.</li>
            <li>This carefully curated day trip offers a perfect balance of nature, art, and history, giving you a rich, unforgettable taste of Chengdu.</li>
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
            <li>Escape the city and step into the untouched beauty of Bipenggou, a hidden gem in Sichuan’s Aba Tibetan and Qiang Autonomous Prefecture. Just a short drive transports you from urban life to soaring alpine peaks, where nature reveals a different masterpiece in every season.</li>
            <li>In spring, wildflowers blanket the valleys; summer brings refreshing forests and cascading streams; autumn sets the mountains ablaze with golden hues; and winter transforms the landscape into a sparkling wonderland.</li>
            <li>Beyond its breathtaking scenery, Bipenggou invites you to experience authentic Tibetan culture—wander through traditional villages, visit serene monasteries, and join lively festivals that celebrate the warmth and spirit of the Tibetan people.</li>
            <li>This unforgettable day trip combines natural splendor with cultural discovery, offering a journey into the very heart of Sichuan.</li>
            
           </ul>
          </div>
          <div v-if="tourInfo.id === 11">
            <ul>
                <li>Discover Chengdu’s Cultural Heart</li>  
                <li>Step into the vibrant soul of Chengdu, where ancient traditions meet modern energy. This day tour immerses you in the city’s rich cultural heritage with visits to Kuanzhai Alley and People's Park, two iconic landmarks that showcase Chengdu’s unique charm.</li>          
                <li>Kuanzhai Alley, made up of three parallel lanes—Kuan Alley, Zhai Alley, and Jing Alley—offers a journey through time. Kuan Alley evokes the leisurely pace of historic Chengdu with its classic teahouses and taverns. Zhai Alley blends traditional courtyards with stylish bars and boutiques. Jing Alley brings modern Chengdu to life through lively nightlife and contemporary art displays.</li>
                <li>At People’s Park, experience the city’s famous “slow life” philosophy. Stroll among lush greenery, sip tea in traditional teahouses, watch locals play mahjong, or try your hand at calligraphy. This park has long been the heart of Chengdu’s daily life, offering a genuine glimpse into local culture.</li>
                <li>The day concludes with a culinary highlight at Shuyanfu Restaurant, where traditional Sichuan cuisine meets cultural performance. Savor authentic local dishes in a setting reminiscent of ancient royal banquets, creating a perfect harmony of taste and tradition.</li>
                <li>This tour is a complete Chengdu experience, blending cultural discovery and gastronomic delight in a single unforgettable day.</li>
                
           </ul>
          </div>
          <div v-if="tourInfo.id === 12">
            <ul>
                <li>Spend a full day immersed in the spiritual beauty of Mount Emei, where nature and Zen traditions come together. Start your journey with a tour of ancient temples, wandering serene halls filled with centuries of wisdom and quiet reflection.</li>  
                <li>Enjoy a wholesome vegetarian meal, embracing the monastic values of simplicity and gratitude, and savor every bite mindfully. Join guided meditation sessions led by experienced monks, exploring your inner calm and finding mental clarity amidst the tranquil surroundings.</li>
                <li>Experience the meditative art of copying sacred scriptures, a hands-on practice that deepens your connection to Zen teachings. As the day concludes, participate in the incense-burning ritual, symbolically purifying the mind and uplifting the spirit.</li>
                <li>This unique journey blends spiritual practice, cultural immersion, and natural beauty, offering a transformative experience that nurtures inner peace and a deeper appreciation for Zen traditions.</li>    
           </ul>
          </div>
          <div v-if="tourInfo.id === 13">
            <ul>
               <li>Start your day early in Chengdu and head west into the soaring landscapes of the Qionglai Mountains. As the city slowly disappears behind you, the road winds through lush river valleys and forested hills, gradually climbing into the highlands where the colors and traditions of Tibetan culture begin to appear—prayer flags flutter in the wind, stone villages dot the slopes, and distant snow-capped peaks rise on the horizon.</li>
               <li>Your journey leads to Mount Siguniang, often called the “Queen of Sichuan’s Peaks”, where four towering summits dominate alpine meadows and glacial valleys. Spend the day discovering Shuangqiao Valley, the park’s most scenic and accessible area. Hop on an eco-friendly shuttle and traverse dramatic mountain scenery, pausing to admire turquoise rivers, icy waterfalls, dense spruce forests, and jagged peaks mirrored in serene highland lakes.</li>
               <li>Enjoy a simple local meal or packed picnic amid the breathtaking scenery, with the valley’s quiet and the crisp mountain air offering a refreshing break from the summer heat of the lowlands.</li>
               <li>In the afternoon, begin the return journey to Chengdu, winding down through steep river canyons and picturesque Tibetan-style villages. By evening, you’ll be back in the city, carrying with you the memory of Sichuan’s hidden natural wonders—all experienced in just a single day.</li>
           </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Highlights" name="second">
          <div v-if="tourInfo.id === 1">
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
          </div>
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
          <div v-if="tourInfo.id === 4">
            <ul>
              <li><span class="bold-text">Closest Alpine Escape from Chengdu</span>– Just two hours away, Xiling Snow Mountain offers one of Sichuan’s most accessible snow resorts, blending year-round alpine scenery with seasonal snowfields.</li>
              <li><span class="bold-text">Riyueping (Sun & Moon Terrace) </span>–
                 A sweeping viewpoint where misty mornings and glowing sunsets frame the distant Daxuetang Peak and its surrounding ridges.</li>
              <li><span class="bold-text"> Daxuetang Peak</span>– Towering above 5,000 meters, this glacial giant dominates the skyline, creating a breathtaking snowy backdrop.</li>
              <li><span class="bold-text">Yingxue Square </span>– Encircled by fir trees and easy pathways, it’s the perfect spot for gentle strolls, crisp mountain air, and memorable photos.</li>
              <li><span class="bold-text">Snow & Ski Recreation Area </span>– From sledding and tubing to skiing and snowmobiling, this family-friendly zone guarantees winter fun for visitors of all ages.</li>
              <li><span class="bold-text">Forest Trails in Winter </span>– Wander through quiet alpine woods draped in snow, with frozen streams and untouched powder amplifying the serene beauty.</li>
              <li><span class="bold-text">Golden Sunset at Riyueping </span>– When conditions are right, the snowfields reflect a radiant golden glow as the sun sets over drifting clouds and faraway peaks.</li>
              <li><span class="bold-text">Easy Day Trip Accessa </span>– A simple round-trip drive from Chengdu makes this one of the most convenient ways to enjoy snow without needing an overnight stay.</li>
              
            </ul>
          </div>
          <div v-if="tourInfo.id === 5">
            <ul>
              <li><span class="bold-text">Ultimate Exploration</span>–Make the most of your day by visiting Sichuan’s top two attractions in one journey.</li>
              <li><span class="bold-text">Panda Encounters </span>–
                Get up close with playful pandas and learn about efforts to protect these beloved animals.</li>
              <li><span class="bold-text"> Historic Marvel</span>– Stand in awe of the Leshan Giant Buddha and explore its rich cultural and spiritual legacy.</li>
              <li><span class="bold-text">Perfectly Paced</span>– A well-structured itinerary that blends natural wonders with cultural heritage in a single day.</li>
              
            </ul>
          </div>
          <div v-if="tourInfo.id === 6">
            <ul>
              <li><span class="bold-text">Ultimate Exploration</span>–Make the most of your day by visiting Sichuan’s top two attractions in one journey.</li>
              <li><span class="bold-text">Panda Encounters </span>–
                Get up close with playful pandas and learn about efforts to protect these beloved animals.</li>
              <li><span class="bold-text"> Historic Marvel</span>– Stand in awe of the Leshan Giant Buddha and explore its rich cultural and spiritual legacy.</li>
              <li><span class="bold-text">Perfectly Paced</span>– A well-structured itinerary that blends natural wonders with cultural heritage in a single day.</li>
              
            </ul>
          </div>
          <div v-if="tourInfo.id === 7">
            <ul>
              <li><span class="bold-text">Observe giant pandas up close</span>as they roam their semi-wild habitat at Wolong Panda Base.</li>
              <li><span class="bold-text">Be mesmerized by the magical Blue Tears</span>at Yantianwo Bridge, a rare nighttime natural spectacle.</li>
              <li><span class="bold-text"> Snap photos with the world’s largest panda sculpture</span>at Yantianwo, a true symbol of Chengdu’s playful charm.</li>
              <li><span class="bold-text">Step back in time at Nanqiao Bridge</span>, a historic landmark that reflects centuries of Chengdu’s cultural heritage.</li>
              <li><span class="bold-text">Wander through the stunning Zhongshu Bookstore</span>, an architectural gem and one of the world’s most beautiful bookstores.</li>

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
          <div v-if="tourInfo.id === 10">
            <ul>
              <li><span class="bold-text">Mountain Escape:</span>Leave the bustle of the city behind and ascend quickly into breathtaking alpine scenery.</li>
              <li><span class="bold-text">Four Seasons of Beauty:</span>From spring blossoms to summer forests, autumn gold, and winter snow, nature transforms the valley year-round.</li>
              <li><span class="bold-text"> Tibetan Heartbeat:</span>Step into authentic Tibetan villages, discover monasteries, and feel the rhythm of local traditions.</li>
              <li><span class="bold-text">Nature & Adventure:</span>Wander through untouched landscapes,embrace winter fun in the snow.</li>

            </ul>
          </div>
          <div v-if="tourInfo.id === 11">
            <ul>
              <li><span class="bold-text">Kuanzhai Alley:</span>Wander through historic lanes, visit traditional teahouses, and discover vibrant local shops.</li>
              <li><span class="bold-text">People's Park:</span> Immerse yourself in authentic Chengdu life, sipping tea, playing mahjong, or practicing calligraphy alongside locals.</li>
              <li><span class="bold-text"> Shuyanfu Dinner: </span>Savor a royal-style banquet featuring classic Sichuan cuisine.</li>
              <li><span class="bold-text"> Cultural Performances: </span>Be captivated by dazzling face-changing shows and thrilling fire-breathing acts.</li>

            </ul>
          </div>
          <div v-if="tourInfo.id === 12">
            <ul>
              <li><span class="bold-text">Temple Discovery:</span>Step into ancient sacred halls and feel the echoes of centuries of spiritual wisdom.</li>
              <li><span class="bold-text">Mindful Feast: </span> Enjoy a vegetarian meal with full awareness, embracing the simplicity and gratitude of monastic life.</li>
              <li><span class="bold-text">Meditation Guidance: </span>Journey inward with the support of experienced monks, finding clarity and calm beyond everyday distractions.</li>
              <li><span class="bold-text">Sacred Script Practice:  </span>Engage in the meditative art of copying scriptures, deepening your connection to Zen teachings.</li>
               <li><span class="bold-text">Incense Ritual: </span>Purify your mind and uplift your spirit through the timeless practice of incense burning.</li>

            </ul>
          </div>
          <div v-if="tourInfo.id === 13">
            <ul>
              <li><span class="bold-text">Scenic Mountain Escape: </span>Just two hours from Chengdu, travel into the soaring landscapes of the Qionglai Mountains.</li>
              <li><span class="bold-text">Majestic Peaks: </span> Admire Mount Siguniang, the “Queen of Sichuan’s Peaks,” with four towering summits above alpine meadows.</li>
              <li><span class="bold-text">Shuangqiao Valley Wonders:  </span>Explore turquoise rivers, icy waterfalls, dense spruce forests, and jagged peaks reflected in serene lakes.</li>
              <li><span class="bold-text">Day-Trip Convenience:  </span>Experience Sichuan’s hidden natural beauty—all in a single day from Chengdu.</li>


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
              <li><span class="bold-text">04:00 PM – 05:00 PM</span>  Dress in traditional Tibetan attire for a memorable photo session capturing the essence of local culture.
              </li>
              <li><span class="bold-text"> 05:00 PM – 07:00 PM</span> Enjoy a yak hotpot dinner and join a Guozhuang dance around a lively bonfire, celebrating Tibetan hospitality and community spirit.</li>
              <li><span class="bold-text"> 09:30 PM</span> Return to your hotel, concluding a full day of unforgettable Tibetan experiences.</li>


            </ul>
          </div>
          <div v-if="tourInfo.id === 4">
            <ul>
              <li><span class="bold-text"> Morning </span> Drive to Xiling Snow Mountain.</li>

              <li><span class="bold-text">Daytime </span> Explore Xiling: snow play, scenic views, and activities.
              </li>
              <li><span class="bold-text">Evening </span> Return to Chengdu.</li>
              

            </ul>
          </div>
          <div v-if="tourInfo.id === 5">
            <ul>
              <li><span class="bold-text"> 7:50 AM </span>Pick up from hotel and start your adventure.</li>

              <li><span class="bold-text">8:30 AM – 10:50 AM </span> Explore the Chengdu Research Base of Giant Panda Breeding, getting up close with playful pandas.
              </li>
              <li><span class="bold-text">10:50 AM – 12:50 PM </span> Scenic drive to Leshan with a stop for lunch along the way.</li>
              <li><span class="bold-text"> 1:50 PM – 3:50 PM </span>Marvel at the Leshan Giant Buddha, the world’s largest stone-carved Buddha.</li>
              <li><span class="bold-text"> 6:00 PM </span>Return to your hotel, concluding a day filled with wildlife and cultural wonders.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 6">
            <ul>
              <li><span class="bold-text"> 7:00 AM </span>Hotel pick-up.</li>
              <li><span class="bold-text">9:40 AM – 12:40 PM  </span> Explore Bifengxia Panda Base, observing giant pandas in their natural habitat.
              </li>
              <li><span class="bold-text">1:40 PM  </span>Lunch break.</li>
              <li><span class="bold-text"> 2:40 PM – 4:40 PM </span>Hands-on tea experience: pick fresh tea leaves and learn traditional tea-making techniques on Mengding Mountain.</li>
              <li><span class="bold-text"> 6:40 PM</span>Return to hotel.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 7">
              <ul>
              <li><span class="bold-text"> 7:00 AM </span>Hotel pick-up.</li>
              <li><span class="bold-text">9:40 AM – 12:40 PM  </span> Explore Bifengxia Panda Base, observing pandas in their natural, semi-wild habitat.
              </li>
              <li><span class="bold-text">1:40 PM  </span>Lunch break.</li>
              <li><span class="bold-text"> 2:40 PM – 4:40 PM </span>Participate in tea picking and traditional tea crafting at Mengding Mountain.</li>
              <li><span class="bold-text"> 6:40 PM</span>Return to hotel.</li>
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
          <div v-if="tourInfo.id === 10">
            <ul>
              <li><span class="bold-text">7:00 AM</span> –  Depart from your hotel and begin the scenic drive toward Bipenggou.</li>
              <li><span class="bold-text">10:40 AM – 2:40 PM</span> – Explore the stunning landscapes of Bipenggou Valley. Walk along alpine trails, enjoy the panoramic views of snow-capped peaks.</li>
              <li><span class="bold-text">2:40 PM</span>– Pause for lunch with refreshing mountain air and surrounding natural beauty.</li>
              <li><span class="bold-text">3:10 PM – 6:10 PM</span> – Return drive to Chengdu, taking in the peaceful countryside along the way.</li>
              <li><span class="bold-text">6:10 PM </span>– Arrive back at your hotel, concluding a full day of discovery.</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 11">
            <ul>
              <li><span class="bold-text">9:00 AM – Hotel Pick-Up:</span> Begin your cultural journey with a comfortable transfer from your hotel.</li>
              <li><span class="bold-text">9:30 AM – 12:00 PM – Explore Kuanzhai Alley:</span> Wander through the historic lanes, sip tea in traditional teahouses, and browse vibrant shops blending old-world charm with modern flair.</li>
              <li><span class="bold-text">12:30 PM – Lunch Break:</span>Enjoy a relaxed meal at your leisure.</li>
              <li><span class="bold-text">1:30 PM – 4:30 PM – Discover People's Park:</span>Immerse yourself in local life—watch tea-drinking rituals, join a game of mahjong.</li>
              <li><span class="bold-text">6:00 PM – Shuyanfu Dining Experience: </span>Savor a royal-style Sichuan banquet complemented by mesmerizing cultural performances</li>
              <li><span class="bold-text">8:30 PM – Return to Hotel: </span>Conclude your day of cultural immersion and culinary delight with a comfortable transfer back.</li>

            </ul>
          </div>
          <div v-if="tourInfo.id === 12">
            <ul>
              <li><span class="bold-text">7:30 AM </span>– Pick up from your hotel and begin your journey to Mount Emei.</li>
              <li><span class="bold-text">9:30 AM</span> – Arrive at the majestic Mount Emei, ready for a day of Zen immersion.</li>
              <li><span class="bold-text">10:00 AM – 4:30 PM</span>– Participate in Zen practices, including temple exploration, meditation, scripture copying, and mindful rituals.</li>
              <li><span class="bold-text">6:30 PM</span>– Return to your hotel, concluding a day of spiritual reflection and inner calm.</li>
              
            </ul>
          </div>
          <div v-if="tourInfo.id === 13">
            <div><span class="bold-text">Morning – Departure from Chengdu </span></div>
            <div>Begin your day early, driving west along the Dujiangyan–Wenchuan Expressway. Pass through the towns of Yingxiu and Wolong, then cross the Balang Mountain Tunnel to gradually enter the Tibetan Plateau region. Upon reaching the Mount Siguniang Scenic Area, hop on an eco-shuttle to explore Shuangqiao Valley, the park’s most accessible and picturesque route. Enjoy a day surrounded by towering snow-capped peaks, lush forests, tranquil lakes, and alpine meadows.</div>
            <div><span class="bold-text">Daytime – Exploring Siguniang Mountain</span></div>
            <ul>
              <li>The Four Sisters Peaks dominate the skyline, with Yaomei Peak reaching 6,250 meters. Often shrouded in clouds or snow, these majestic summits are nicknamed the “Alps of the East” and create one of Sichuan’s most iconic alpine vistas.</li>
              <li>Shuangqiao Valley stretches over 35 kilometers, with its eco-shuttle route meandering along glacial rivers and alpine terrain—perfect for nature photography or leisurely strolls through conifer forests and valleys.</li>
              <li>Niupengzi Meadow opens wide under distant peaks, where yaks graze quietly on the grasslands. Crisp blue skies and snowy mountains frame the scene, capturing the essence of Tibetan pastoral life.</li>
              <li>Deeper into the valley, Mount Buda La rises sharply like a fortress, adding a dramatic, mysterious touch. Nearby, Sun & Moon Mirror Mountain gleams under sunlight, its cliff face reflecting the light like a natural mirror—an unforgettable, surreal sight.</li>
              <li>Wander through the Red Spruce Forest, which transforms with the seasons—fiery red in autumn, snow-covered in winter—offering a serene escape. Along the route, alpine lakes such as Haizi Lake perfectly mirror the peaks and sky, creating one of the valley’s most tranquil and beautiful corners.</li>
            </ul>
            <div><span class="bold-text">Evening – Return to Chengdu </span></div>
            <div>In the late afternoon, drive back to Chengdu, concluding a day immersed in snowy horizons, alpine forests, and highland serenity in western Sichuan.</div>
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
          <div v-if="tourInfo.id === 4">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Private vehicle transfers for the entire trip </li>
              <li>Bilingual driver-guide service (English-speaking)</li>
              <li>All applicable taxes</li>
            

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
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
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Round-trip transportation </li>
              <li>Entrance tickets to attractions</li>
              <li>Professional tour guide</li>
              <li>Service fees</li>
              <li>Applicable taxes</li>

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Meals and drinks</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses (e.g., shopping, souvenirs)</li>
              <li>Gratuities/tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 6">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Transfers and transportation </li>
              <li>Professional tour guide</li>
              <li>Service charges</li>
              <li>Applicable taxes</li>
              
            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Meals and drinks</li>
              <li>Optional excursions or activities</li>
              <li>Personal expenses (such as souvenirs or shopping)</li>
              <li>Gratuities/tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 7">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Visit to Zhongshu Bookstore</li>
              <li>Visit to Nanqiao (South) Bridge</li>
              <li>Visit to Yantianwo Plaza</li>
              <li>Professional guide service</li>
              <li>Private car transfer between hotel and attractions</li>

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Meals</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses such as shopping</li>
              <li>tips</li>
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
          <div v-if="tourInfo.id === 10">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li>Private transportation throughout the trip</li>
              <li>Professional English-speaking tour guide</li>
              <li>Taxes</li>
             

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Meals and beverages</li>
              <li>Optional activities or programs</li>
              <li>Personal expenses, including shopping</li>
              <li>Tips</li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 11">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
              <li><span class="bold-text">Private Transportation:</span>Comfortable travel throughout the day.</li>
              <li><span class="bold-text">Professional Tour Guide:</span>Knowledgeable guide to enrich your experience.</li>
              <li><span class="bold-text">Taxes</span></li>
             

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li><span class="bold-text">Meals: </span>Enjoy lunch and other personal dining choices on your own.</li>
              <li><span class="bold-text">Optional Programs</span></li>
              <li><span class="bold-text">Personal Expenses:</span>Shopping, souvenirs, and other personal costs.</li>
              <li><span class="bold-text">Tips</span></li>
            </ul>
          </div>
          <div v-if="tourInfo.id === 12">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
               <li>Meals during the tour.</li>
              <li>Transportation between destinations</li>
              <li>Professional tour guide services</li>
              <li>Service fees</li>
              <li>Applicable taxes</li>
             

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
            <ul>
              <li>Optional activities</li>
              <li>Personal expenses, such as shopping</li>
              <li>Gratuities / tips</li>
       
            </ul>
          </div>
          <div v-if="tourInfo.id === 13">
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Includes</span></p>
            <ul>
               <li>Private car transfer for the entire trip</li>
              <li>Professional English-speaking driver and guide service</li>
              <li>All applicable taxes and service fees</li>
              
             

            </ul>
            <p style="margin-top: 2%;"><span style="font-weight: bold;">Excludes</span></p>
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
        this.tourInfo.adultPrice = 215;
      
      }else if (id === 4) {
        this.images = [img4_1, img4_2, img4_3, img4_4, img4_5, img4_6, img4_7, img4_8];
        this.tourInfo.title = "Xiling Snow Mountain: Day Tour of Adventure and Beauty ";
        this.tourInfo.adultPrice = 109;

      } else if (id === 5) {
        this.images = [img5_1, img5_2, img5_3, img5_4, img5_5, img5_6, img5_7, img5_8];
        this.tourInfo.title = "Leshan Giant Buddha & Pandas: A Day of Wonder";
        this.tourInfo.adultPrice = 165;

      }else if (id === 6) {
        this.images = [img6_1, img6_2, img6_3, img6_4, img6_5, img6_6, img6_7, img6_8];
        this.tourInfo.title = "Tea Picking & Panda Encounters in the Unspoiled";
        this.tourInfo.adultPrice = 155;

      }
      else if (id === 7) {
        this.images = [img7_1, img7_2, img7_3, img7_4, img7_5, img7_6, ];
        this.tourInfo.title = "Discover Wolong, Blue Tears & Zhongshu: Chengdu’s Secret Gems";
        this.tourInfo.adultPrice = 145;

      }else if (id === 8) {
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
      }else if (id === 10) {
        this.images = [img10_1, img10_2, img10_3, img10_4, img10_5, img10_6,img10_7,img10_8, ];
        this.tourInfo.title = "Discover the Snowy Magic of Bipenggou in One Day";
        this.tourInfo.adultPrice = 125;

      }else if (id === 11) {
        this.images = [img11_1, img11_2, img11_3, img11_4, img11_5, img11_6,img11_7,img11_8, ];
        this.tourInfo.title = "Chengdu: A Journey Through Culture & Tradition";
        this.tourInfo.adultPrice = 295;

      }
      else if (id === 12) {
        this.images = [img12_1, img12_2, img12_3, img12_4, img12_5, img12_6,img12_7,img12_8, ];
        this.tourInfo.title = "Zen Escape: A Journey into Mindful Serenity";
        this.tourInfo.adultPrice = 155;

      }else if (id === 13) {
        this.images = [img13_1, img13_2, img13_3, img13_4, img13_5, img13_6,img13_7,img13_8, ];
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