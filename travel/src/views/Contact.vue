<template>
  <div class="homepage">
    <!-- 顶部导航栏 -->
    <Header />
    <Banner />
    <section style=" display:flex;align-items: center;justify-content: center;flex-direction: column;background-color: white;">
      

      <h3 style="padding-top: 20px;">
        E-mail: chengduexplorertour@gmail.com</h3>
      <h3 style="margin-top: 20px;">
        Phone: +8618512852813</h3>
      <h3 style="margin-top: 20px;">
        WhatsApp: +8613880311099</h3>
        <h3 style="margin-top: 20px;">
          WeChat: 17882008669</h3>
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
