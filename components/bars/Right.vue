<script setup>
import Button from "../reusable/button.vue";
import search from "../reusable/search.vue";
import card from "../reusable/card.vue";
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
      <template #footer>
        <Button>Subscribe</Button>
      </template>
    </card>
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
</style>
