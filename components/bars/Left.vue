<script setup>
import { useSidebarLinks } from "@/composables/useSidebarLinks";
import { useRoute } from "vue-router";
import Button from "../reusable/button.vue";
const route = useRoute(); // reactive current route
const links = useSidebarLinks();
const activePage = ref(""); // Track the active page

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

    <li><Button>Tweet</Button></li>

    <li class="special">
      <div class="profile">
        <div class="profile-left">
          <img
            src="../../assets/images/human.png"
            alt="Profile Picture"
            class="profile-image"
          />
        </div>
        <div class="profile-middle">
          <h3 class="profile-name">JP Junior</h3>
          <p class="profile-username">@iamjpjunior</p>
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 8px 0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: background-color 0.3s;
}

a {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.blue {
  color: vars.$dim_icons;
  font-size: 1.5rem;
  margin-right: 10px;
  position: relative; /* Required for the dot */
}

.profile {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.profile-left {
  margin-right: 10px;
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

.profile-name {
  font-family: "MyFontHeavy", sans-serif;
  font-size: 1rem;
  margin: 0;
}

.profile-username {
  font-family: "MyFontRegular", sans-serif;
  font-size: 0.875rem;
  margin: 0;
}

.profile-right {
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
  font-weight: normal; // default
  transition: font-weight 0.2s ease;
}

.nav-link.active {
  font-weight: bold;
}

.icon-wrapper {
  position: relative;
  margin-right: 10px;
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
