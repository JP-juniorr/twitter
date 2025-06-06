<script setup>
import Button from "../reusable/button.vue";
import search from "../reusable/search.vue";
import card from "../reusable/card.vue";
import follow from "../reusable/follow.vue";
import Footer from "../footer.vue";
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
          <li>1. Spurs vs Arsenal</li>
          <li>2. NBA Finals</li>
          <li>3. Tech Innovations</li>
          <li>4. Climate Change</li>
          <li>5. Local Elections</li>
          <li>6. Summer Festivals</li>
          <li>7. Health and Wellness</li>
          <li>8. Movie Releases</li>
        </ul>
      </template>
    </card>

    <follow> </follow>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
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
  list-style-type: none;
  padding: 0;
  margin: 0;
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
