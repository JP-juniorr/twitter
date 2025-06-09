<script setup>
import { ref, watch } from "vue";
import SidebarLeft from "./components/bars/Left.vue";
import Middle from "./components/bars/Middle.vue";
import Right from "./components/bars/Right.vue";
const isActive = ref(false);
</script>

<template>
  <div :class="{ active: isActive }">
    <div class="main">
      <div class="left"><SidebarLeft /></div>
      <div class="middle"><NuxtPage /></div>
      <div class="right"><Right /></div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/mixins.scss" as *;
.active {
  color: vars.$dim_100;
  @include width_height_100;
  background: vars.$dim_100;
}

.main {
  @include flex-between;
  align-items: flex-start; /* Align items to the top */
  width: 100%;
  height: 100vh;
}

.left {
  width: 20%;
  position: sticky; /* Makes the element stick to the top */
  top: 0; /* Stick to the top of the viewport */
  padding: 20px 50px;
  overflow: hidden; /* Prevent scrolling */
}

.middle {
  width: 50%;
  overflow-y: auto; /* Enable scrolling for the middle section */
}

.right {
  width: 30%;
  overflow-y: auto; /* Enable scrolling for the middle section */
}

.left,
.middle,
.right {
  height: 100vh; /* Full viewport height */
  border-left: 1px solid vars.$dim_border;
}
</style>
