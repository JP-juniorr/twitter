<script setup>
import { ref, watch } from "vue";
import SidebarLeft from "./components/sidebar/Left.vue";
import Middle from "./components/Middle.vue";
const isActive = ref(true);
</script>

<template>
  <div :class="{ active: isActive }">
    <div class="main">
      <div class="left"><SidebarLeft /></div>
      <div class="middle"><Middle /></div>
      <div class="right"><Right /></div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/variables.scss" as vars;
.active {
  color: vars.$dim_100;
  width: 100%;
  height: 100vh;
  background: vars.$dim_100;
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the top */
  width: 100%;
  height: 100vh;
}

.left {
  width: 20%;
  height: 100vh;
  position: sticky; /* Make the left section sticky */
  top: 0; /* Stick to the top */
  border: 1px solid black;
}

.middle {
  width: 50%;
  height: 100vh;
  overflow-y: auto; /* Enable scrolling for the middle section */
  border: 1px solid black;
}

.right {
  width: 30%;
  height: 100vh;
  overflow-y: auto; /* Enable scrolling for the middle section */
  border: 1px solid black;
}
</style>
