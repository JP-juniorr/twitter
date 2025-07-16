<template>
  <div class="show-more">
    <button class="show-more-button">
      <slot name="button-text">Show More</slot>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as vars;
.show-more {
  color: vars.$dim_icons;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
}
</style>
