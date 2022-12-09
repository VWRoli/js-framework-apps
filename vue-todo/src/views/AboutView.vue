<script lang="ts">
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<template>
  <div class="container">
    <div class="about-content">
      <p class="text">This is just a simple about page</p>
      <button class="about-link">
        <a href="/">Home</a>
      </button>
    </div>
    <Footer />
  </div>
</template>

<style></style>
