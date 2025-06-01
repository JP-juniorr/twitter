<script setup>
import Left from "./components/sidebar/Left.vue";
import { ref, watch } from "vue";

const darkMode = ref(true);
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left Sidebar -->
          <div
            class="hidden border-2 border md:block xs-col-span-1 xl:col-span-2"
          >
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- Middle Content -->
          <div class="bg-blue-500 col-span-2">
            <h1>middle</h1>
          </div>
          <!-- Right Sidebar -->
          <div class="bg-gray-500 col-span-2">
            <h1>right</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/variables.scss" as vars;
.dark {
  color: vars.$dim_100;
}
</style>
