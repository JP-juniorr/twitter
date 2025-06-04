<template>
  <button class="blue-button">
    <slot />
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
</style>
