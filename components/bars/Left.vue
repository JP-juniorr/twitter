<script setup>
import { useSidebarLinks } from "@/composables/useSidebarLinks";
import { useRoute } from "vue-router";
import Button from "../reusable/Button.vue";
const route = useRoute(); // reactive current route
const links = useSidebarLinks();
const activePage = ref(""); // Track the active page
import Follow from "../reusable/Follow.vue";
function setActivePage(page) {
  activePage.value = page;
}
</script>

<template>
  <div class="logo">
    <NuxtLink to="/" @click="setActivePage('/')">
      <div class="w-8 h-8">
        <LogoTwitter />
      </div>
    </NuxtLink>
  </div>

  <ul>
    <li v-for="link in links" :key="link.to">
      <NuxtLink :to="link.to" class="nav-link">
        <div class="icon-wrapper">
          <Icon :name="link.icon" class="blue" />
          <span v-if="route.path === link.to" class="dot" />
        </div>
        <span
          class="label"
          :class="{ 'label--active': route.path === link.to }"
        >
          {{ link.label }}
        </span>
      </NuxtLink>
    </li>

    <li>
      <Button class="button-card">
        <template #tweet> Tweet </template>
      </Button>
    </li>

    <li class="special">
      <div class="profile">
        <div class="profile-left">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile Picture"
            class="profile-image"
          />
        </div>
        <div class="profile-middle">
          <h3 class="profile-name">Hussein Ammar</h3>
          <p class="profile-username">@hussein</p>
        </div>
        <div class="profile-right">
          <Icon name="tabler:dots" class="profile-options" />
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/fonts.scss";
@use "@/assets/styles/mixins.scss" as *;

ul {
  @include list-reset;
}
.logo {
  margin-bottom: 2rem;
}

li {
  @include flex-align-center;
  margin: 8px 0;
  padding: 11px 0;
}

a {
  @include flex-align-center;
  font-size: 18px;
}

.blue {
  color: vars.$dim_icons;
  font-size: 1.5rem;
  position: relative; /* Required for the dot */
}

.profile {
  @include flex-align-center;
  padding: 10px 0;
  border-radius: 10px;
}

.blue,
.profile-left {
  margin-right: 10px;
}

.blue {
  border: 1px solid black;
}

li,
.profile {
  transition: background-color 0.3s;
  cursor: pointer;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-middle {
  flex: 1;
}

.profile-name,
.profile-username {
  font-family: "MyFontHeavy", sans-serif;
  font-size: 1rem;
  margin: 0;
}

.profile-right {
  @include flex-align-center;
}

.profile-options {
  color: vars.$dim_icons;
  font-size: 1.25rem;
  position: absolute;
  top: 35%;
  right: 10%;
  cursor: pointer;
}

.special {
  width: 127%;
  position: relative;
}

.nav-link {
  @include flex-align-center;
  font-weight: normal; // default
  transition: font-weight 0.2s ease;
}

.nav-link.active {
  font-weight: bold;
}

.icon-wrapper {
  position: relative;
  margin-right: 10px;
  @include flex-align-center;
}

.label {
  font-weight: normal;
  transition: font-weight 0.2s ease;
}

.label--active {
  font-weight: bold;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: vars.$dim_50;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 80%;
  transform: translateX(-50%);
  border: 1px solid black;
}
</style>
