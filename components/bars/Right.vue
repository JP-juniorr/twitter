<script setup>
import Button from "../reusable/button.vue";
import search from "../reusable/search.vue";
import card from "../reusable/card.vue";
import follow from "../reusable/follow.vue";
import Footer from "../footer.vue";
import { useTrending } from "@/composables/useTrending";

const trendingItems = useTrending();
</script>

<template>
  <div class="main">
    <search></search>
    <card class="card">
      <template #title> Subscribe to Premium </template>
      <template #content>
        Subscribe to unlock new features and if eligible, receive a share of
        revenue.
      </template>
      <template #button>
        <Button>
          <template #subscribe> Subscribe </template>
        </Button>
      </template>
    </card>
    <card class="card">
      <template #title> What’s happening </template>
      <template #content>
        Trending in USA
        <ul>
          <li v-for="item in trendingItems" :key="item.id">
            {{ item.title }}
          </li>
        </ul>
      </template>
    </card>

    <follow> </follow>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
@use "@/assets/styles/mixins" as *;
.main {
  display: block;
  padding: 2rem;
}
.card {
  margin: 15px 0px;
}
p {
  font-size: 1rem;
  color: black;
}
ul {
  @include list-reset;
}
li {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #536471;
}
a {
  text-decoration: none;

  color: inherit;
  &:hover {
    text-decoration: underline;
  }
}
</style>
