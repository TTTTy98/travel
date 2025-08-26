<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <Banner />
    <section style="  padding: 0px 500px;background-color: white;">
      <h1 style="font-weight: bold;padding-top: 20px;"> In order to better tailor a personalized itinerary for you, please kindly provide
        your
        intended destination, travel dates, and the number of travelers. </h1>
      <h2 style="margin-top: 20px;">
        Contact information：</h2>
      <h3 style="margin-top: 20px;">
        E-mail: xxxxx</h3>
      <h3 style="margin-top: 20px;">
        WhatsApp: xxxx</h3>
      <h3 style="margin-top: 20px;">
        WeChat: xxxxx</h3>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/BannerNoLearn.vue";

export default {
  name: "About",
  components: {
    Header,
    Banner
  },
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style scoped>
.homepage {
  font-family: 'Arial', sans-serif;
}
</style>
