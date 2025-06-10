<script setup>
import tweetBoxVue from "~/components/tweet-box.vue";
import Button from "../components/reusable/Button.vue";
import topnavVue from "../components/topnav.vue";
</script>

<template>
  <div class="main-container">
    <div class="top-nav"><topnavVue /></div>
    <div>
      <tweetBoxVue />
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/mixins.scss" as *;

.main-container {
  width: 100%;
  .top-nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #f5f8fa; // Light background for the top nav
    border-bottom: 1px solid #e6ecf0; // Subtle border for separation
  }
}
</style>
