<script setup>
import Button from "./button.vue";
</script>

<template>
  <div class="card">
    <div class="card-title">
      <slot name="title">Default Title</slot>
    </div>
    <div class="card-content">
      <slot name="content">Default Content</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">
        <Button class="button-card">Default Button</Button>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.card-content {
  font-size: 1rem;
  margin-bottom: 16px;
  color: #666;
}

.card-footer {
  text-align: left;
  width: 40%;
}

.default-button:hover {
  background-color: #0c85d0;
}
</style>
