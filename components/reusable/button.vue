<script setup>
const slots = useSlots();
</script>

<template>
  <button v-if="slots.subscribe" class="blue-button">
    <slot name="subscribe" />
  </button>

  <!-- Only render follow-button div if slot "follow" is passed -->
  <button v-if="slots.follow" class="follow-button">
    <slot name="follow" />
  </button>

  <!-- Only render follow-button div if slot "follow" is passed -->
  <button v-if="slots.tweet" class="blue-button">
    <slot name="tweet" />
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;

.blue-button {
  background-color: vars.$dim_50;
  color: white;
  padding: 10px 20px;
  border-radius: 9999px;
  width: 100%;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

.follow-button {
  background-color: vars.$dim_50;
  color: white;
  padding: 5px 10px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition: background-color 0.3s, color 0.3s;
}
</style>
