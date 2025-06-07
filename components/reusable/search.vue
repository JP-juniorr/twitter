<template>
  <div class="search-container">
    <Icon name="tabler:search" class="search-icon" />
    <input type="text" placeholder="Search Twitter" class="search-input" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins.scss" as *;
.search-container {
  @include flex-align-center;
  background-color: #eff3f4;
  border-radius: 9999px; // full pill shape
  padding: 8px 12px;
  width: 100%; /* Ensure it spans the full width */
}

.search-icon {
  color: #536471;
  font-size: 18px;
  margin-right: 8px;
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  width: 100% !important;
  font-size: 14px;
  color: #0f1419;

  &::placeholder {
    color: #536471;
  }
}
</style>
