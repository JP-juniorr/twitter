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
@use "@/assets/styles/mixins.scss" as *;

.blue-button {
  @include btn;
  width: 100%;
  background-color: vars.$dim_50;
  padding: 10px 20px;
  font-size: 1rem;
}

.follow-button {
  @include btn;
  background-color: vars.$dim_50;
  padding: 5px 10px;
  font-size: 15px;
}
</style>
